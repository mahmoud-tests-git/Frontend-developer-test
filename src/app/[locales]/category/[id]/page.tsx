import CategoiresHeader from '@/components/organisms/CategoiresHeader';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await fetch(`https://api.calvero.club/categories/${params.id}`);
  const json = await data.json();
  console.log(json.metadata);
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
      url: process.env.NEXT_PUBLIC_SITE_URL + '/category/' + params.id,
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

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(`https://api.calvero.club/categories/${params.id}`);
  const json = await data.json();
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-10 pb-10">
      <CategoiresHeader title={json.name} description={json.description} />
    </div>
  );
}
