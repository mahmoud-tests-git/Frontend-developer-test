import { notFound } from 'next/navigation';

import ProductsCarousel from '@/components/organisms/ProductsCarousel';
import ProductCard from '@/components/organisms/ProductCard';

type ProductType = {
  id: string;
  img: string;
  title: string;
  price: string;
};

const getMainProducts = async () => {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const response = await fetch(`${siteUrl}/api/main-products`, {
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch main products: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default async function Home() {
  let json;
  try {
    json = await getMainProducts();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }

  return (
    <div className="container mx-auto flex flex-col gap-10 my-10 ">
      <ProductsCarousel products={json.carousel} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-6 place-items-center">
        {json.products.map((product: ProductType) => (
          <ProductCard
            id={product.id}
            key={product.id}
            src={product.img}
            alt={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
