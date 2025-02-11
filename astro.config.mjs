import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import sumiml from '@sumiml/astro-integration';

export const baseConfig = {
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax]
  },
  integrations: [react(), sumiml()],
};

// https://astro.build/config
export default defineConfig({
  ...baseConfig,
  site: "https://toyskip725.github.io",
  base: "/notebooks",
});