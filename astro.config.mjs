import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const baseConfig = {
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  integrations: [react(), mdx()],
};

// https://astro.build/config
export default defineConfig({
  ...baseConfig,
  site: "https://toyskip725.github.io",
  base: "/notebooks",
});