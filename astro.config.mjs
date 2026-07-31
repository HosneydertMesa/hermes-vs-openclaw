// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hosneydertmesa.github.io',
  base: '/hermes-vs-openclaw',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
    },
  },
});
