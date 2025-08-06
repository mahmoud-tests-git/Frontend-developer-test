import 'server-only';
import { setupI18n, type I18n, type Messages } from '@lingui/core';

import linguiConfig from '../lingui.config';

const { locales } = linguiConfig;
type SupportedLocales = (typeof locales)[number];
type AllI18nInstances = { [K in SupportedLocales]: I18n };

async function loadCatalog(
  locale: SupportedLocales,
): Promise<{ [k: string]: Messages }> {
  try {
    const { messages } = await import(`./locales/${locale}.js`);
    return { [locale]: messages };
  } catch (error) {
    console.error(`Failed to load catalog for locale "${locale}":`, error);
    // Fallback to empty messages
    return { [locale]: {} };
  }
}

const catalogs = await Promise.all(locales.map(loadCatalog));

// transform array of catalogs into a single object
export const allMessages = catalogs.reduce((acc, oneCatalog) => {
  return { ...acc, ...oneCatalog };
}, {});

// create i18n instance for every locale

export const allI18nInstances: AllI18nInstances = locales.reduce(
  (acc, locale) => {
    const message = allMessages[locale] ?? {};
    const i18n = setupI18n({
      locale,
      messages: {
        [locale]: message,
      },
    });

    return { ...acc, [locale]: i18n };
  },
  {} as AllI18nInstances,
);

export const getI18nInstance = (locale: SupportedLocales): I18n => {
  const instance = allI18nInstances[locale];

  if (!instance) {
    console.warn(
      `No i18n instance found for locale "${locale}", falling back to "en"`,
    );
    return (
      allI18nInstances.en || setupI18n({ locale: 'en', messages: { en: {} } })
    );
  }

  return instance;
};
