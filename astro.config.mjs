import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vertek.mx',
  // El aviso de privacidad va como noindex: fuera del sitemap.
  integrations: [
    sitemap({ filter: (page) => !page.includes('/aviso-de-privacidad') }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
