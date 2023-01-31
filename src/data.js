import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'What we do',
      href: getPermalink('#what-we-do'),
    },
    {
      text: 'Who we are',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),

    }
  ],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/PNxh7cwKfQ' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Tuhura-Tech' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/people/Tūhura-Tech/100083052084710/' },
  ],
  footNote: `
    Made by Tuhura Tech <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://www.register.charities.govt.nz/Charity/CC60416">(CC60416)</a> using a theme by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">onWidget</a> · All rights reserved.
  `,
};
