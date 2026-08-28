import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://higorgroto.github.io',
  base: '/',
  integrations: [
    tailwind(),
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
