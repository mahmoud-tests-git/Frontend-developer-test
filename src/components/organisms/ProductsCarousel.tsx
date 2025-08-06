'use client';
import { useState, useEffect } from 'react';

import { Carousel, CarouselApi, CarouselContent } from '../ui/carousel';
import ProductSlide from '../molecules/ProductSlide';
import PaginationDots from '../molecules/PaginationDots';
import CarouselControls from '../molecules/CarouselControls';

export default function ProductsCarousel({
  products,
}: {
  products: { id: number; img: string }[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className=" h-96 relative">
      <Carousel className="p-0" setApi={setApi}>
        <CarouselContent className="p-0">
          {products.map((product) => (
            <ProductSlide
              key={product.id}
              id={product.id}
              src={product.img}
              alt={product.img}
            />
          ))}
        </CarouselContent>

        <CarouselControls />

        <PaginationDots
          count={count}
          current={current}
          onSlideChange={goToSlide}
        />
      </Carousel>
    </div>
  );
}
