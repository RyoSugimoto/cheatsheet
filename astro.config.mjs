// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { HOME_DIR_NAME } from './src/const.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://RyoSugimoto.github.io',
  base: `/${HOME_DIR_NAME}`,
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
