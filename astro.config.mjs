import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samjolley.com',
  output: 'static',
  trailingSlash: 'always',
  // Drafts are excluded from production builds in the writing routes, so they
  // never reach the generated sitemap. No hand-maintained URL list to drift.
  integrations: [sitemap()],
});
