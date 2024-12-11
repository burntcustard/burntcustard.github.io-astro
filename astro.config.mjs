// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import webmanifest from 'astro-webmanifest';

export default defineConfig({
  site: 'https://burnt.io',
  integrations: [
    mdx(),
    sitemap(),
    webmanifest({
      name: 'burnt.io',
      icon: 'public/favicon.svg',
    }),
  ],
});
