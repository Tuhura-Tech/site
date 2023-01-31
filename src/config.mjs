const CONFIG = {
  name: 'Tūhura Tech',

  origin: 'https://tuhuratech.org.nz',
  basePathname: '/',
  trailingSlash: false,

  title: 'Tūhura Tech',
  description:
    'Wellington based charity focused on technology education for students.',

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
