// ---------------------------------------------------------------
// FORMULARIO DE CONTACTO → API de Brevo
// ---------------------------------------------------------------
// Función serverless en Vercel. Recibe el envío del formulario, lo valida y
// lo entrega por la API transaccional de Brevo (POST /v3/smtp/email).
//
// Misma mecánica que el sitio de Fyron, con los campos y la marca de Vertek.
//
// La clave de Brevo NUNCA sale del servidor: vive en las variables de entorno
// del proyecto en Vercel. Por eso este archivo está fuera de `src/`; nada de
// lo que hay aquí se compila hacia el navegador.
//
// Variables de entorno (los nombres distinguen mayúsculas):
//   brevo_key            (requerida) Clave v3 — panel de Brevo, SMTP & API → API keys.
//                        Se acepta BREVO_API_KEY como nombre alterno.
//   correos_industrial   Destinatarios del aviso, separados por comas.
//   BREVO_SENDER_EMAIL   Remitente verificado en Brevo. Si el dominio no está
//                        verificado, Brevo rechaza el envío.
//   BREVO_SENDER_NAME    Nombre visible del remitente
//   BREVO_LIST_ID        Si tiene valor, el prospecto se guarda además como
//                        contacto en esa lista de Brevo (no bloquea el envío)

const BREVO = 'https://api.brevo.com/v3';

const ES_CORREO = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

// La clave está dada de alta en Vercel como `brevo_key`; se admite el nombre
// convencional por si el proyecto se migra a otro host.
const API_KEY = process.env.brevo_key || process.env.BREVO_API_KEY;

// Destinatarios del aviso. En Vercel es `correos_industrial`, una lista
// separada por comas; se admite CONTACT_TO como nombre alterno. Se descarta
// cualquier entrada que no tenga forma de correo para que un dedazo en el
// panel no tumbe el envío completo.
const DESTINOS = (process.env.correos_industrial || process.env.CONTACT_TO || '')
  .split(',')
  .map((correo) => correo.trim())
  .filter((correo) => ES_CORREO.test(correo));

if (!DESTINOS.length) DESTINOS.push('contacto@vertek.mx');

const REMITENTE = {
  email: process.env.BREVO_SENDER_EMAIL || 'no-reply@vertek.mx',
  name: process.env.BREVO_SENDER_NAME || 'Vertek — formulario del sitio',
};

// Etiquetas de los campos en el correo que recibe el equipo.
const ETIQUETAS = {
  nombre: 'Nombre',
  empresa: 'Empresa',
  correo: 'Correo',
  telefono: 'Teléfono',
  mensaje: 'Requerimiento',
};

// Tope de caracteres por campo. Corta el abuso y evita correos deformes.
const LIMITES = {
  nombre: 120,
  empresa: 160,
  correo: 200,
  telefono: 40,
  mensaje: 4000,
};

const OBLIGATORIOS = ['nombre', 'correo', 'mensaje'];

const escapar = (v) =>
  String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Normaliza el cuerpo recibido, venga como JSON o como formulario nativo. */
function leerCuerpo(req) {
  const crudo = req.body;

  if (!crudo) return {};
  if (typeof crudo === 'object') return crudo;

  if (typeof crudo === 'string') {
    const tipo = String(req.headers['content-type'] || '');
    if (tipo.includes('application/json')) {
      try {
        return JSON.parse(crudo);
      } catch {
        return {};
      }
    }
    return Object.fromEntries(new URLSearchParams(crudo));
  }

  return {};
}

/** Deja solo campos conocidos, recortados y dentro de su límite. */
function sanear(cuerpo) {
  const datos = {};
  for (const campo of Object.keys(LIMITES)) {
    const valor = cuerpo[campo];
    if (valor == null) continue;
    const limpio = String(valor).trim().slice(0, LIMITES[campo]);
    if (limpio) datos[campo] = limpio;
  }
  return datos;
}

function validar(datos) {
  const faltan = OBLIGATORIOS.filter((campo) => !datos[campo]);
  if (datos.correo && !ES_CORREO.test(datos.correo)) faltan.push('correo');
  return [...new Set(faltan)];
}

function componerCorreo(datos, lang) {
  const filas = Object.entries(ETIQUETAS)
    .filter(([campo]) => datos[campo])
    .map(([campo, etiqueta]) => [etiqueta, datos[campo]]);

  const texto = filas.map(([k, v]) => `${k}: ${v}`).join('\n');

  const celdas = filas
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #e9ebec;font:500 11px/1.4 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6e747b;vertical-align:top;white-space:nowrap">${escapar(
            k
          )}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #e9ebec;font:400 15px/1.6 Inter,Arial,sans-serif;color:#1c1f23">${escapar(
            v
          ).replace(/\n/g, '<br>')}</td>
        </tr>`
    )
    .join('');

  // Sin color de acento, como el sitio: la jerarquía es contraste y reglas.
  const html = `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:24px;background:#f4f5f5">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #dcdfe1">
      <tr>
        <td style="padding:20px 16px;background:#14161a;border-bottom:3px solid #33373c">
          <p style="margin:0;font:500 11px/1.4 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:#a8aeb4">Contacto desde el sitio</p>
          <p style="margin:6px 0 0;font:600 20px/1.3 Archivo,Arial,sans-serif;color:#ffffff">${escapar(
            datos.nombre
          )}${datos.empresa ? ` — ${escapar(datos.empresa)}` : ''}</p>
        </td>
      </tr>
      <tr><td><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${celdas}</table></td></tr>
      <tr>
        <td style="padding:16px;background:#f4f5f5">
          <p style="margin:0;font:400 12px/1.6 Inter,Arial,sans-serif;color:#6e747b">
            Enviado desde el formulario de vertek.mx (${escapar(lang)}).
            Responder a este correo contesta directo al prospecto.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const asunto = datos.empresa
    ? `Contacto desde vertek.mx — ${datos.nombre} (${datos.empresa})`
    : `Contacto desde vertek.mx — ${datos.nombre}`;

  return { asunto, html, texto };
}

async function brevo(ruta, cuerpo) {
  const respuesta = await fetch(`${BREVO}${ruta}`, {
    method: 'POST',
    headers: {
      'api-key': API_KEY,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(cuerpo),
  });

  if (!respuesta.ok) {
    const detalle = await respuesta.text().catch(() => '');
    const error = new Error(`Brevo ${ruta} respondió ${respuesta.status}: ${detalle}`);
    error.status = respuesta.status;
    throw error;
  }

  return respuesta.status === 204 ? {} : respuesta.json().catch(() => ({}));
}

/** Guarda el prospecto como contacto en Brevo. Nunca tumba la petición. */
async function guardarContacto(datos) {
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!listId) return;

  const [nombre, ...resto] = datos.nombre.split(/\s+/);

  try {
    await brevo('/contacts', {
      email: datos.correo,
      updateEnabled: true,
      listIds: [listId],
      attributes: {
        NOMBRE: nombre,
        APELLIDOS: resto.join(' ') || undefined,
        EMPRESA: datos.empresa,
        SMS: datos.telefono,
      },
    });
  } catch (error) {
    console.error('[contacto] no se pudo guardar el contacto en Brevo:', error.message);
  }
}

/** Respuesta para envíos sin JavaScript, que esperan navegar a una página. */
function paginaHtml({ titulo, mensaje, volver, etiquetaVolver }) {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex">
    <title>${escapar(titulo)}</title>
  </head>
  <body style="margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:#14161a;font-family:Inter,system-ui,sans-serif;color:#ffffff">
    <main style="max-width:34rem;border-left:3px solid #6e747b;padding:0 0 0 1.5rem">
      <h1 style="margin:0;font:700 clamp(1.5rem,4vw,2rem)/1.2 Archivo,Arial,sans-serif">${escapar(
        titulo
      )}</h1>
      <p style="margin:1rem 0 2rem;line-height:1.7;color:#a8aeb4">${escapar(mensaje)}</p>
      <a href="${escapar(volver)}" style="display:inline-block;padding:.85rem 1.5rem;background:#ffffff;color:#14161a;font-weight:600;text-decoration:none">${escapar(
        etiquetaVolver
      )}</a>
    </main>
  </body>
</html>`;
}

const COPIA = {
  es: {
    exito: {
      titulo: 'Mensaje enviado',
      mensaje:
        'Gracias. Recibimos tu mensaje y te contestamos en menos de 24 horas hábiles.',
      volver: '/',
      etiquetaVolver: 'Volver al inicio',
    },
    error: {
      titulo: 'No pudimos enviar el mensaje',
      mensaje:
        'Algo falló de nuestro lado. Escríbenos a contacto@vertek.mx y lo resolvemos igual de rápido.',
      volver: '/#contacto',
      etiquetaVolver: 'Volver al formulario',
    },
  },
  en: {
    exito: {
      titulo: 'Message sent',
      mensaje:
        'Thank you. We received your message and will reply within 24 business hours.',
      volver: '/en/',
      etiquetaVolver: 'Back to home',
    },
    error: {
      titulo: "We couldn't send your message",
      mensaje:
        'Something failed on our side. Write to us at contacto@vertek.mx and we will take it from there.',
      volver: '/en/#contacto',
      etiquetaVolver: 'Back to the form',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'metodo' });
  }

  const cuerpo = leerCuerpo(req);
  const lang = cuerpo.lang === 'en' ? 'en' : 'es';

  // El navegador nativo espera una página; fetch espera JSON.
  const quiereHtml = !String(req.headers['content-type'] || '').includes(
    'application/json'
  );
  const responder = (estado, clave, datosJson) => {
    if (quiereHtml) {
      res.setHeader('content-type', 'text/html; charset=utf-8');
      return res.status(estado).send(paginaHtml(COPIA[lang][clave]));
    }
    return res.status(estado).json(datosJson);
  };

  // Trampa para bots: el campo está oculto, una persona nunca lo llena.
  if (String(cuerpo._gotcha || '').trim()) {
    return responder(200, 'exito', { ok: true });
  }

  const datos = sanear(cuerpo);
  const faltan = validar(datos);

  if (faltan.length) {
    return responder(400, 'error', { ok: false, error: 'validacion', campos: faltan });
  }

  if (!API_KEY) {
    console.error('[contacto] falta la variable de entorno brevo_key');
    return responder(500, 'error', { ok: false, error: 'configuracion' });
  }

  const { asunto, html, texto } = componerCorreo(datos, lang);

  try {
    await brevo('/smtp/email', {
      sender: REMITENTE,
      to: DESTINOS.map((email) => ({ email })),
      // Contestar el aviso escribe directo al prospecto.
      replyTo: { email: datos.correo, name: datos.nombre },
      subject: asunto,
      htmlContent: html,
      textContent: texto,
      tags: ['sitio-web', 'vertek', `formulario-${lang}`],
    });
  } catch (error) {
    // El detalle se queda en los logs; al visitante no le decimos nada
    // que revele la configuración.
    console.error('[contacto] falló el envío por Brevo:', error.message);
    return responder(502, 'error', { ok: false, error: 'envio' });
  }

  await guardarContacto(datos);

  return responder(200, 'exito', { ok: true });
}
