import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tuhuratech.org.nz",
  prefetch: true,
  integrations: [sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});