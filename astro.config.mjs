import { defineConfig } from 'astro/config';

// Published at https://0xgitpushpray.github.io/awesome-albania
// When a custom domain is pointed at the site, set SITE to it and BASE to '/'.
export default defineConfig({
  site: process.env.SITE ?? 'https://0xgitpushpray.github.io',
  base: process.env.BASE ?? '/awesome-albania',
  trailingSlash: 'ignore',
});
