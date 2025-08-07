import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ReduxProvider } from '@/components/providers/reduxProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Calvero - Luxury Belts',
  description:
    "Experience the unmatched craftsmanship and timeless elegance of Calvero's premium leather belts.",
  icons: {
    icon: '/favicon/favicon.svg',
  },
};

const createStructuredData = () => {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Calvero',
    alternateName: 'Calvero',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    description: metadata.description,
    inLanguage: 'en-US',
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Calvero',
    alternateName: 'Calvero',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/favicon.webp`,
    description: metadata.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+905326666666',
      contactType: 'sales',
      availableLanguage: ['Turkish', 'English'],
    },
  };
  return {
    websiteJsonLd,
    organizationJsonLd,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { websiteJsonLd, organizationJsonLd } = createStructuredData();
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl overflow-x-hidden mx-auto`}
      >
        <ReduxProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
