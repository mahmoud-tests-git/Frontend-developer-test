import ProductImage from '../atoms/ProductImage';
import FavoriteButton from '../atoms/FavoriteButton';
import ProductBadge from '../atoms/ProductBadge';

interface ProductImageContainerProps {
  src: string;
  alt: string;
  badge?: {
    label: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  };
  isFavorited?: boolean;
  onFavoriteToggle?: () => void;
  className?: string;
}

export default function ProductImageContainer({
  src,
  alt,
  badge,
  isFavorited = false,
  onFavoriteToggle,
  className = 'relative',
}: ProductImageContainerProps) {
  return (
    <div className={className}>
      <ProductImage
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="object-cover aspect-[3/4] hover:scale-110 transition-all duration-300"
      />

      {badge && <ProductBadge label={badge.label} variant={badge.variant} />}

      <FavoriteButton isFavorited={isFavorited} onToggle={onFavoriteToggle} />
    </div>
  );
}
