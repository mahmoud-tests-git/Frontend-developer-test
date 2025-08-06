// src/app/[locales]/layout.tsx
import { LinguiClientProvider } from '@/components/dev/LinguiClientProvider';
import { allMessages } from '@/appRouterI18n';

export default function LocaleLayout({
  children,
  params: { locales },
}: {
  children: React.ReactNode;
  params: { locales: string };
}) {
  const messages = allMessages[locales as 'en' | 'tr'] || allMessages.en;

  return (
    <LinguiClientProvider initialLocale={locales} initialMessages={messages}>
      {children}
    </LinguiClientProvider>
  );
}
