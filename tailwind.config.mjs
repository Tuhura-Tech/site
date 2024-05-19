const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    colors: {
      primary: '#6aa469',
      secondary: '#175b98',
      ...colors
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
  darkMode: 'media',
};
