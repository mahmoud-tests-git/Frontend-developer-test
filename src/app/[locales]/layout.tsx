// src/app/[locales]/layout.tsx
import { LinguiClientProvider } from '@/components/dev/LinguiClientProvider';
import { allMessages } from '@/appRouterI18n';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/footer';
import { withLinguiLayout } from '@/components/dev/withLingui';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locales: string }>;
};
const metadata = {
  title: {
    tr: 'Calvero - Lüks Kemerler',
    en: 'Discover Calvero Luxury Belts · Calvero',
  },
  description: {
    tr: "Calvero'nun premium deri kemerlerinin eşsiz işçiliğini ve zamansız zarafetini deneyimleyin.",
    en: "Experience the unmatched craftsmanship and timeless elegance of Calvero's premium leather belts. Elevate your style today",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locales: string }>;
}): Promise<Metadata> {
  const { locales } = await params;

  return {
    title: metadata.title[locales as 'en' | 'tr'] || metadata.title.en,
    description:
      metadata.description[locales as 'en' | 'tr'] || metadata.description.en,
    authors: [{ name: 'Calvero' }],
    creator: 'Calvero',
    openGraph: {
      type: 'website',
      title: metadata.title[locales as 'en' | 'tr'] || metadata.title.en,
      description:
        metadata.description[locales as 'en' | 'tr'] || metadata.description.en,
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
        },
      ],
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Calvero',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title[locales as 'en' | 'tr'] || metadata.title.en,
      description:
        metadata.description[locales as 'en' | 'tr'] || metadata.description.en,
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default withLinguiLayout(function LocaleLayout({
  children,
  locales,
}: {
  children: React.ReactNode;
  locales: string;
}) {
  const messages = allMessages[locales as 'en' | 'tr'] || allMessages.en;

  return (
    <LinguiClientProvider initialLocale={locales} initialMessages={messages}>
      <div className="flex flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </LinguiClientProvider>
  );
});
