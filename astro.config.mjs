import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dos destinos con la misma base de código:
//   - Producción: dominio propio (vertek.mx), en la raíz.
//   - Vista previa: GitHub Pages sirve el repo bajo /vertek/.
// El workflow de despliegue activa el segundo con GITHUB_PAGES=true.
const enPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: enPages ? 'https://adriangarza84.github.io' : 'https://vertek.mx',
  base: enPages ? '/vertek' : '/',
  integrations: [
    sitemap({
      // Español en la raíz, inglés bajo /en/. Con esto el sitemap emite
      // las alternas hreflang entre las dos versiones de cada página.
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-MX', en: 'en-US' },
      },
      // El aviso de privacidad va como noindex, en los dos idiomas:
      // fuera del sitemap.
      filter: (page) => !/(aviso-de-privacidad|privacy-notice)/.test(page),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
