// ---------------------------------------------------------------
// VERTEK — CONFIGURACIÓN NEUTRAL AL IDIOMA
// Aquí vive solo lo que no se traduce: datos de la empresa, endpoint
// del formulario y los enlaces a los sitios de las empresas.
//
// El copy está en src/data/contenido.es.js y contenido.en.js.
// Las cadenas de interfaz, en src/i18n/ui.js.
// Los valores marcados con [confirmar] son marcadores pendientes.
// ---------------------------------------------------------------

export const site = {
  nombre: 'Vertek',
  descriptor: 'Industrial Holding',
  dominio: 'https://vertek.mx',

  ciudad: 'San Pedro Garza García, N.L.',
  region: 'Nuevo León',
  correo: 'contacto@vertek.mx',

  // Endpoint del formulario de contacto (Formspree, Basin, Netlify Forms…)
  formEndpoint: 'https://formspree.io/f/xxxxxxxx', // [confirmar]
};

// ---------------------------------------------------------------
// ENLACES DE LAS EMPRESAS
// Van aparte del copy, y no duplicados por idioma, para que cambiar un
// dominio no deje la otra versión apuntando al sitio viejo.
// El id enlaza con la entrada correspondiente de cada contenido.
// ---------------------------------------------------------------

export const enlacesEmpresas = {
  macero: 'https://macero.mx',
  valltor: 'https://valltor.com',
  apex: 'https://apex-blond-seven.vercel.app', // [confirmar] dominio definitivo
  tecnocranes: 'https://tecnocranes.com',
  orme: 'https://orme-psi.vercel.app', // [confirmar] dominio definitivo
  fyron: 'https://fyron.mx',
  subestaciones: 'https://subestacionesjuarez.com',
};

// ---------------------------------------------------------------
// RUTAS
// En GitHub Pages el sitio se publica en un subdirectorio (/vertek/), así
// que todos los enlaces internos absolutos deben pasar por ruta(). En
// producción (vertek.mx) base es '/' y ruta() no agrega prefijo.
// ---------------------------------------------------------------

export const ruta = (camino = '/') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${camino}`;
