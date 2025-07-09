import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
	site: "https://tuhuratech.org.nz",
	prefetch: true,
	integrations: [sitemap(), icon()],

	vite: {
		plugins: [tailwindcss()],
	},
});
