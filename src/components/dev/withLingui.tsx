import React, { type ReactNode } from 'react';
import { setI18n } from '@lingui/react/server';

import { getI18nInstance } from '../../appRouterI18n';

export type PageLangParam = {
  params: {
    locales: 'en' | 'tr';
  };
};

type PageProps = PageLangParam & {
  searchParams?: unknown; // in query
};

type LayoutProps = PageLangParam & {
  children: React.ReactNode;
};

type PageExposedToNextJS<Props extends PageProps> = (props: Props) => ReactNode;

export const withLinguiPage = <Props extends PageProps>(
  AppRouterPage: React.ComponentType<PageLangParam & Props>,
): PageExposedToNextJS<Props> => {
  return function WithLingui(props) {
    const lang = props.params.locales;
    const i18n = getI18nInstance(lang);
    setI18n(i18n);

    return <AppRouterPage {...props} lang={lang} />;
  };
};

type LayoutExposedToNextJS<Props extends LayoutProps> = (
  props: Props,
) => ReactNode;

export const withLinguiLayout = <Props extends LayoutProps>(
  AppRouterPage: React.ComponentType<PageLangParam & Props>,
): LayoutExposedToNextJS<Props> => {
  return function WithLingui(props) {
    const lang = props.params.locales;
    const i18n = getI18nInstance(lang);
    setI18n(i18n);

    return <AppRouterPage {...props} lang={lang} />;
  };
};
