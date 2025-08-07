import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ProductImage({
  src,
  alt,
  width = 1000,
  height = 1000,
  className = 'w-full h-full object-cover absolute top-1/2 -translate-y-1/2',
}: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}
