import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CategoiresHeader from '@/components/organisms/CategoiresHeader';
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function generateMetadata(params: any): Promise<Metadata> {
  const { id } = await params;
  let json;
  try {
    json = await getCategory(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      title: 'Calvero - Categories',
      description: 'Calvero - Categories',
      keywords: 'Calvero, Categories',
      authors: [{ name: 'Calvero' }],
      creator: 'Calvero',
      openGraph: {
        type: 'website',
        url: process.env.NEXT_PUBLIC_SITE_URL + '/category/' + id,
      },
    };
  }

  const metadata = {
    title: json.metadata.title,
    description: json.metadata.description,
    keywords: json.metadata.keywords,
  };
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'Calvero' }],
    creator: 'Calvero',
    openGraph: {
      type: 'website',
      url: process.env.NEXT_PUBLIC_SITE_URL + '/category/' + id,
      siteName: 'Calvero',
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.webp'],
    },
  };
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function CategoryPage(params: any) {
  const { id } = await params;
  let json;
  try {
    json = await getCategory(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-10 pb-10">
      <CategoiresHeader title={json.name} description={json.description} />
    </div>
  );
}

async function getCategory(id: string) {
  try {
    const calveroApiUrl = process.env.NEXT_PUBLIC_CALVERO_API_URL;
    const response = await fetch(`${calveroApiUrl}/categories/${id}`, {
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch category: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
