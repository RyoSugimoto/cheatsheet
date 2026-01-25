// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://RyoSugimoto.github.io',
  base: '/cheatsheet',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      wrap: true,
      themes: {
        light: 'github-light-high-contrast',
        dark: 'github-dark-high-contrast',
      },
    },
  },
});
