/** @type {import('@lingui/conf').LinguiConfig} */

const config = {
  locales: ['en', 'tr', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en',
  },
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src'],
    },
  ],
  format: 'po', // Using PO format for translations
};

export default config;
