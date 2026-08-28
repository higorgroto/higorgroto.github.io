import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://higorgroto.github.io',
  base: '/',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
