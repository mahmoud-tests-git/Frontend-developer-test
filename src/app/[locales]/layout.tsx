// src/app/[locales]/layout.tsx
import { LinguiClientProvider } from '@/components/dev/LinguiClientProvider';
import { allMessages } from '@/appRouterI18n';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/footer';

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
      <div className="flex flex-col ">
        <Header />
        {children}
        <Footer />
      </div>
    </LinguiClientProvider>
  );
}
