import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Calvero',
    short_name: 'Calvero',
    id: 'calvero',
    description:
      "Experience the unmatched craftsmanship and timeless elegance of Calvero's premium leather belts.",
    start_url: process.env.NEXT_PUBLIC_SITE_URL,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    categories: ['fashion', 'luxury', 'leather', 'belts'],
    dir: 'ltr',
    lang: 'en',
    launch_handler: {
      client_mode: 'focus-existing',
    },
    prefer_related_applications: false,
    related_applications: [],
    scope: '/',
    icons: [
      {
        src: '/favicon.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
    ],
  };
}
