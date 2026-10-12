# VERTEK — Web corporativa

Sitio del holding industrial Vertek. Construido en **Astro 5**, estático, sin
dependencias de framework y sin JavaScript de cliente más allá de dos scripts
mínimos (menú móvil y revelado al hacer scroll).

**Bilingüe:** español como idioma principal en la raíz, inglés bajo `/en/`. Las
dos versiones se generan estáticamente; el cambio de idioma es un enlace, no
JavaScript ni un traductor automático.

## Arrancar

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run dev` abre en `http://localhost:4321`. El build genera `dist/` listo
para publicar en Vercel, Netlify, Cloudflare Pages o cualquier hosting estático.

## Publicación

**Producción:** https://vertek.mx — servida por **Vercel** (proyecto
`futurite1/vertek`, preset Astro, conectado a este repo desde agosto de 2026).

**Cada push a `main` despliega a producción.** No hay que hacer nada más. No
hay `vercel.json`: la configuración vive en el panel de Vercel.

Si un push no aparece en producción, antes de dar por hecho que la conexión
está rota, **mira la lista de despliegues**: un build puede fallar y dejar
producción servida por el anterior. El error `Git information retrieval
failed` es de Vercel, no del código, y se resuelve con *Redeploy*.

Despliegue manual, solo como salida de emergencia cuando el build desde Git
falla y hay prisa:

```bash
vercel deploy --prod
```

La primera vez pide vincular la carpeta con `vercel link --yes --project
vertek` (crea `.vercel/` y `.env.local`, ambos ignorados).

**Vista previa:** https://adriangarza84.github.io/vertek/ — cada push a `main`
dispara además `.github/workflows/deploy.yml`, que compila con
`GITHUB_PAGES=true` y publica en GitHub Pages bajo `/vertek/`.

Los dos destinos salen del mismo código. Los enlaces internos pasan todos por
el helper `ruta()` de `src/data/site.js` y por la tabla de
`src/i18n/config.js`, por eso funcionan en la raíz y bajo un subdirectorio.

## Estructura

```
src/
  data/
    site.js             ← config neutral al idioma + enlaces de las empresas
    contenido.es.js     ← TODO el copy en español
    contenido.en.js     ← TODO el copy en inglés (mismas claves)
    contenido.js        ← une copy + enlaces: contenido('es') | contenido('en')
  i18n/
    config.js           ← idiomas, locales y tabla de rutas por idioma
    ui.js               ← cadenas de interfaz (navegación, formulario, pie)
  styles/global.css     ← sistema de diseño (tokens + utilidades)
  layouts/
    Layout.astro        ← head, SEO, hreflang, schema.org, header, footer
    Legal.astro         ← plantilla de páginas legales
  paginas/
    Portada.astro       ← portada compartida por los dos idiomas
  components/
    Logo.astro          ← logotipo tipográfico (palabra + regla + descriptor)
    Header.astro        ← navegación sticky + selector de idioma
    Hero.astro
    Grupo.astro         ← #grupo
    Empresas.astro      ← #empresas (las 7 empresas)
    Capacidades.astro   ← #capacidades
    Sectores.astro      ← #sectores
    Respaldo.astro      ← #respaldo
    Contacto.astro      ← #contacto (formulario)
    Footer.astro
  pages/
    index.astro         ← español, en la raíz
    aviso-de-privacidad.astro
    404.astro           ← bilingüe (el host sirve este mismo para todo)
    en/
      index.astro       ← inglés, bajo /en/
      privacy-notice.astro
public/
  favicon.svg
  og.png                ← imagen para redes sociales (1200×630)
  robots.txt
```

## Dónde se edita el contenido

| Qué | Dónde |
| --- | --- |
| Copy de las secciones | `src/data/contenido.es.js` y `contenido.en.js` |
| Navegación, botones, formulario, pie | `src/i18n/ui.js` |
| Correo, ciudad, endpoint del formulario | `src/data/site.js` |
| URL de una empresa | `enlacesEmpresas` en `src/data/site.js` (una sola vez) |
| Rutas y slugs por idioma | `rutas` en `src/i18n/config.js` |
| Texto legal | `src/pages/aviso-de-privacidad.astro` y `en/privacy-notice.astro` |

Reglas que conviene no romper:

- **`contenido.es.js` y `contenido.en.js` son gemelos.** Misma forma, mismas
  claves. Si añades una clave en uno, añádela en el otro o la versión que falte
  se queda sin ese texto.
- **Las URL de las empresas viven una sola vez**, en `enlacesEmpresas`,
  emparejadas por `id`. Así cambiar un dominio no deja el otro idioma
  apuntando al sitio viejo.
- **Los `id` de sección no se traducen** (`#empresas`, `#contacto`…). Por eso
  el ancla sigue funcionando al cambiar de idioma.
- **Ningún componente escribe texto visible directamente**: todo pasa por
  `contenido()` o por `traducir()`.

## Dirección de diseño

Paleta clara y arquitectónica, monocromática, tomada del logotipo: blancos,
grises concreto y grafito `#33373C`. Sin color de acento — la jerarquía se
construye con contraste, reglas de un píxel y espacio. Retículas de plano
técnico como textura de fondo y la geometría de la "V" como motivo del hero.

- Tipografías: **Archivo** (títulos), **Inter** (texto), **IBM Plex Mono**
  (etiquetas técnicas). Las mismas familias que Apex, para coherencia de grupo.
- Esquinas rectas en todos los elementos (sin border-radius).
- Accesibilidad: contraste AA, foco visible, `skip link`, jerarquía de
  encabezados correcta y respeto a `prefers-reduced-motion`.

## Contenido: las 7 empresas

Macero · Valltor · Apex · Tecnocranes · Orme · Fyron · Subestaciones Juárez.

El orden y los textos salen de `empresas` en `src/data/contenido.es.js` y
`contenido.en.js`; el enlace, de `enlacesEmpresas` en `src/data/site.js`. Las
siete tienen sitio; si alguna se queda sin web, basta con quitar su entrada de
`enlacesEmpresas` y la tarjeta pasa sola al estado "próximamente".

## Pendientes antes de publicar

1. **Dominio definitivo de Apex y Orme** — hoy apuntan a
   `apex-blond-seven.vercel.app` y `orme-psi.vercel.app`. Actualizar en
   `enlacesEmpresas` (`src/data/site.js`) cuando tengan dominio propio; con eso
   cambian los dos idiomas a la vez. Fyron ya está en `fyron.mx`.
2. **Analítica** — no se instaló ninguna. Si se quiere, se agrega en
   `src/layouts/Layout.astro`.

La razón social y el domicilio del aviso de privacidad ya están resueltos:
el responsable es **MACERO METALES, S.A. DE C.V.**, la sociedad que opera la
marca. Los datos viven en `site.razonSocial` y `site.domicilioFiscal`
(`src/data/site.js`) y alimentan las dos versiones del aviso.

## Formulario de contacto

El formulario entrega por la **API transaccional de Brevo**, con la misma
mecánica que el sitio de Fyron: una función serverless en `api/contacto.js`
—fuera de `src/`, así que nada de eso llega al navegador— que valida el envío
y llama a Brevo. La clave nunca sale del servidor.

Sin JavaScript el formulario hace POST nativo y la función responde con una
página de acuse. Con JavaScript se envía por `fetch` y el resultado se anuncia
sin sacar al visitante de la página. En la vista previa de GitHub Pages no hay
servidor: ahí el formulario se queda sin `action` y cae a un `mailto`, en vez
de fingir un envío que nadie recibiría.

**Estado: configurado y probado en producción** (12 de octubre de 2026). Los
avisos salen de `no-reply@vertek.mx` —dominio autenticado en Brevo— y llegan a
los mismos buzones que el formulario de Fyron.

Variables en Vercel → Settings → Environment Variables (ver `.env.example`):

| Variable | Qué es |
| --- | --- |
| `brevo_key` | Clave API v3 de Brevo. **Requerida.** |
| `correos_industrial` | Destinatarios del aviso, separados por comas. |
| `BREVO_SENDER_EMAIL` | Remitente. **Debe estar verificado en Brevo** o el envío se rechaza. |
| `BREVO_SENDER_NAME` | Nombre visible del remitente. |
| `BREVO_LIST_ID` | Opcional: guarda al prospecto en esa lista de Brevo. |

El aviso lleva `replyTo` con el correo del prospecto: contestar el correo le
responde directo a él.

## Nota sobre `og.png`

La imagen para redes se generó a partir del logotipo y el claim del hero. Si
cambia el claim, hay que regenerarla para que no quede desfasada.
