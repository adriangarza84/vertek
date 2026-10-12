// ---------------------------------------------------------------
// VERTEK — ACCESO AL CONTENIDO POR IDIOMA
// Un solo punto de entrada para las plantillas: contenido('es') o
// contenido('en'). Aquí se emparejan las empresas con su enlace, que
// vive aparte para no duplicarlo en los dos idiomas.
// ---------------------------------------------------------------

import { es } from './contenido.es.js';
import { en } from './contenido.en.js';
import { enlacesEmpresas } from './site.js';

const porIdioma = { es, en };

export const contenido = (idioma) => {
  const base = porIdioma[idioma] ?? porIdioma.es;

  return {
    ...base,
    empresas: base.empresas.map((empresa) => ({
      ...empresa,
      href: enlacesEmpresas[empresa.id] ?? null,
    })),
  };
};
