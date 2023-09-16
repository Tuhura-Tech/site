import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, sharpImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	site: SITE.origin,
	base: SITE.basePathname,
	trailingSlash: SITE.trailingSlash ? 'always' : 'never',

	output: 'static',
	compressHTML: true,

	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		mdx(),
	],

  image: {
    service: sharpImageService(),
  },

	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
	},
});
