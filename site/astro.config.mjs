import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sachncs.github.io',
  base: '/factorise',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    assets: '_astro',
  },
  vite: {
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
});