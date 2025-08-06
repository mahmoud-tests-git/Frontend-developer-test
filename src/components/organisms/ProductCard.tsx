'use client';
import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';

import ProductImageContainer from '../molecules/ProductImageContainer';
import ProductActions from '../molecules/ProductActions';

interface ProductCardProps {
  src?: string;
  alt?: string;
  price?: number | string;
  currency?: string;
  badge?: {
    label: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  };
  onBuyClick?: () => void;
  onFavoriteToggle?: (isFavorited: boolean) => void;
  className?: string;
}

export default function ProductCard({
  src = '/product2.webp',
  alt = 'product',
  price = '17,000',
  currency = '$',
  badge,
  onBuyClick,
  onFavoriteToggle,
  className = 'w-72 overflow-hidden relative',
}: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    const newFavoriteState = !isFavorited;
    setIsFavorited(newFavoriteState);
    onFavoriteToggle?.(newFavoriteState);
  };

  const handleBuyClick = () => {
    onBuyClick?.();
  };

  return (
    <Card className={className}>
      <ProductImageContainer
        src={src}
        alt={alt}
        badge={badge}
        isFavorited={isFavorited}
        onFavoriteToggle={handleFavoriteToggle}
      />

      <CardContent className="absolute bottom-0 right-0 p-0 w-full flex gap-12">
        <ProductActions
          price={price}
          currency={currency}
          onBuyClick={handleBuyClick}
          className="w-full flex gap-12"
        />
      </CardContent>
    </Card>
  );
}
