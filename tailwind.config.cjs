module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#6aa469',
        secondary: '#175b98',
        accent: 'var(--aw-color-accent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'media',
};
