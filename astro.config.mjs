// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://inkspireai.vercel.app',
  integrations: [tailwind()],
  build: {
    assets: '_assets'
  }
});