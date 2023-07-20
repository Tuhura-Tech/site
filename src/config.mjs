const CONFIG = {
  name: 'Tūhura Tech',

  origin: 'https://tuhuratech.org.nz',
  basePathname: '/',
  trailingSlash: false,

  title: 'Tūhura Tech - Empowering the next generation',
  description:
    'Greater Wellington based charity focused on technology education for students.',

  defaultTheme: 'system',

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

};

export const SITE = { ...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;
