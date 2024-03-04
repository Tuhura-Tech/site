import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Our People',
      href: getPermalink('/our-people'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact-us'),
    },
    {
      text: 'Wiki',
      href: 'https://wiki.tuhuratech.org.nz',
    },
    {
      text: 'Support Us',
      href: getPermalink('/support-us'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Tūhura Tech',
      items: [
        { title: 'Wiki', href: 'https://wiki.tuhuratech.org.nz' },
        // { title: 'Forum', href: 'https://forum.tuhuratech.org.nz' },
        { title: 'Git', href: 'https://github.com/Tuhura-Tech' },
      ],
    },
    {
      title: 'Community',
      items: [
        { title: 'Fediverse - Mastodon', href: 'https://mastodon.nzoss.nz/@tuhuratech' },
        { title: 'Wiki', href: 'https://wiki.tuhuratech.org.nz' },
        { title: 'Discord', href: 'https://discord.gg/PNxh7cwKfQ' },
        { title: 'Identity proofs', href: 'https://keyoxide.org/contact@tuhuratech.org.nz' },
      ],
    },
  ],

  socialLinks: [
    {
      label: 'Mastodon',
      icon: 'simple-icons:mastodon',
      href: 'https://mastodon.nzoss.nz/@tuhuratech',
    },
    { label: 'Discord', icon: 'simple-icons:discord', href: 'https://discord.gg/JEHncpzRcv' },
    { label: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/tuhuratech' },
    { label: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/tuhuratech' },
    { label: 'Instagram', icon: 'simple-icons:instagram', href: 'https://www.instagram.com/tuhura_tech' },
  ],
};
