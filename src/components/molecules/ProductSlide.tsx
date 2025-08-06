import { CarouselItem } from '../ui/carousel';
import ProductImage from '../atoms/ProductImage';

interface ProductSlideProps {
  id: string | number;
  src: string;
  alt: string;
  className?: string;
}

export default function ProductSlide({
  id,
  src,
  alt,
  className = 'w-full h-96 relative p-0 ms-2',
}: ProductSlideProps) {
  return (
    <CarouselItem key={id} className={className}>
      <ProductImage src={src} alt={alt} />
    </CarouselItem>
  );
}
