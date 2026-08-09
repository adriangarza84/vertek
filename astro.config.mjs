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
  // El aviso de privacidad va como noindex: fuera del sitemap.
  integrations: [
    sitemap({ filter: (page) => !page.includes('/aviso-de-privacidad') }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
