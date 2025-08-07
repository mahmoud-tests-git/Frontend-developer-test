import React, { type ReactNode } from 'react';
import { setI18n } from '@lingui/react/server';

import { getI18nInstance } from '../../appRouterI18n';

export type PageLangParam = {
  params: Promise<{
    locales: 'en' | 'tr' | 'pseudo';
  }>;
};

type PageProps = PageLangParam & {
  searchParams?: Promise<unknown>; // in query
};

type LayoutProps = PageLangParam & {
  children: React.ReactNode;
};

type PageExposedToNextJS<Props extends PageProps> = (
  props: Props,
) => Promise<ReactNode>;

export const withLinguiPage = <Props extends PageProps>(
  AppRouterPage: React.ComponentType<{ locales: string } & Props>,
): PageExposedToNextJS<Props> => {
  return async function WithLingui(props) {
    const { locales } = await props.params;
    const i18n = getI18nInstance(locales);
    setI18n(i18n);

    return <AppRouterPage {...props} locales={locales} />;
  };
};

type LayoutExposedToNextJS<Props extends LayoutProps> = (
  props: Props,
) => Promise<ReactNode>;

export const withLinguiLayout = <Props extends LayoutProps>(
  AppRouterPage: React.ComponentType<{ locales: string } & Props>,
): LayoutExposedToNextJS<Props> => {
  return async function WithLingui(props) {
    const { locales } = await props.params;
    const i18n = getI18nInstance(locales);
    setI18n(i18n);

    return <AppRouterPage {...props} locales={locales} />;
  };
};
