// ---------------------------------------------------------------
// VERTEK — IDIOMAS Y TABLA DE RUTAS
// Fuente única de verdad del bilingüe. De aquí salen: el selector de
// idioma, las etiquetas hreflang, el canonical y el sitemap.
//
// Español es el idioma principal y vive en la raíz. Inglés cuelga de
// /en/. Añadir una página es añadir una fila en `rutas`.
// ---------------------------------------------------------------

import { ruta } from '../data/site.js';

export const idiomas = ['es', 'en'];

export const idiomaPredeterminado = 'es';

// Atributo lang del <html>.
export const localeHtml = {
  es: 'es-MX',
  en: 'en-US',
};

// og:locale, que usa guion bajo.
export const localeOg = {
  es: 'es_MX',
  en: 'en_US',
};

// hreflang. Coincide con localeHtml, pero se declara aparte porque
// son dos especificaciones distintas y podrían divergir.
export const hreflang = {
  es: 'es-MX',
  en: 'en-US',
};

// Cada id es una página; cada página existe en los dos idiomas.
export const rutas = {
  inicio: { es: '/', en: '/en/' },
  privacidad: { es: '/aviso-de-privacidad/', en: '/en/privacy-notice/' },
};

/** El otro idioma, para el selector. Con dos idiomas basta con esto. */
export const otroIdioma = (idioma) => (idioma === 'es' ? 'en' : 'es');

/** Ruta de una página en un idioma, ya con el prefijo de base aplicado. */
export const rutaDe = (id, idioma) => {
  const pagina = rutas[id];
  if (!pagina) throw new Error(`Ruta desconocida: ${id}`);
  return ruta(pagina[idioma]);
};

/**
 * Las anclas de la portada se resuelven contra el inicio del idioma
 * actual, para que también funcionen desde las páginas legales y el 404.
 */
export const ancla = (hash, idioma) => `${rutaDe('inicio', idioma)}${hash}`;
