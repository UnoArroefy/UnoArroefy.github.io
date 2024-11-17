// @ts-check
import { defineConfig } from "astro/config";
import { resolve } from "path";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import pagefind from "vite-plugin-pagefind";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { BASE, SITE } from "./src/config.json";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        $components: resolve("./src/components"),
        $layouts: resolve("./src/layouts"),
        $pages: resolve("./src/pages"),
        $assets: resolve("./src/assets"),
        $content: resolve("./src/content"),
      },
    },
    ssr: {
      noExternal: [BASE + "/pagefind/pagefind.js"],
    },
    plugins: [pagefind()],
    build: {
      rollupOptions: {
        external: [BASE + "/pagefind/pagefind.js"],
      },
    },
  },

  integrations: [mdx(), sitemap(), tailwind(), svelte()],

  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: "ayu-dark",
        dark: "ayu-dark",
      },
    },
    remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
  },

  prefetch: {
    prefetchAll: true,
  },
  site: SITE,
  base: BASE,
  output: "static",
});
