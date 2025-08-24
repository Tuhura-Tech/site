import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://tuhuratech.org.nz',
	output: 'static',
	prefetch: true,

	integrations: [sitemap(), icon()],

	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
	},

	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: { include: ['leaflet'] },
	},
});
