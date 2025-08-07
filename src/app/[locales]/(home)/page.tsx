import ProductsCarousel from '@/components/organisms/ProductsCarousel';
import ProductCard from '@/components/organisms/ProductCard';

export default async function Home() {
  const data = await fetch('http://localhost:3000/api/main-products');
  const json = await data.json();
  return (
    <div className="container mx-auto flex flex-col gap-10 my-10 ">
      <ProductsCarousel products={json.carousel} />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-6 place-items-center">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {json.products.map((product: any) => (
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
