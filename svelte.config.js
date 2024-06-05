import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md', '.svx'] })],
  extensions: ['.svelte', '.svx', '.md'],
  kit: {
    adapter: adapter({ edge: false, split: false }),
    alias: { $recipes: './src/recipes' }
  }
};

export default config;
