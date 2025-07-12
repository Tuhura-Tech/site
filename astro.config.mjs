import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://tuhuratech.org.nz",
	output: "static",
	prefetch: true,

	integrations: [
		sitemap(),
		icon({
			include: {
				ph: [
					"star-duotone",
					"lightning-duotone",
					"globe-duotone",
					"users-duotone",
					"buildings-duotone",
					"laptop-duotone",
					"briefcase-duotone",
					"check-circle-duotone",
					"x-circle-duotone",
					"code-duotone",
					"puzzle-piece-duotone",
					"brain-duotone",
					"stop-duotone",
					"shield-check-duotone",
					"linkedin-logo-duotone",
					"twitter-logo-duotone",
					"github-logo-duotone",
					"currency-dollar-duotone",
					"arrow-left-duotone",
					"arrow-right",
					"file-search",
					"layout-duotone",
					"calendar-duotone",
					"clock-duotone",
					"link-duotone",
					"check-square-duotone",
					"credit-card-duotone",
					"envelope-duotone",
					"paint-brush-duotone",
					"chart-line-duotone",
					"google-logo-duotone",
					"lock-key-duotone",
					"certificate-duotone",
					"lifebuoy-duotone",
					"handshake-duotone",
				],
			},
		}),
	],

	image: {
		service: {
			entrypoint: "astro/assets/services/sharp",
		},
	},

	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: { include: ["leaflet"] },
	},
});
