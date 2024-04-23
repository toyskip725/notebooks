import { defineConfig } from 'astro/config';
import { baseConfig } from './astro.config.mjs';

// https://astro.build/config
export default defineConfig({
  ...baseConfig,
  site: "http://localhost:4321",
  base: "",
});