'use client';
import { HeartIcon } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';

import { Button } from '../ui/button';

interface FavoriteButtonProps {
  isFavorited?: boolean;
  onToggle?: () => void;
  className?: string;
  iconClassName?: string;
}

export default function FavoriteButton({
  isFavorited = false,
  onToggle,
  className = 'absolute top-2 left-2 p-0 hover:bg-transparent',
  iconClassName = 'size-8 hover:text-red-500 hover:fill-red-500 hover:scale-110 transition-all duration-300',
}: FavoriteButtonProps) {
  const { i18n } = useLingui();

  const handleClick = () => {
    onToggle?.();
  };

  return (
    <Button
      variant="ghost"
      className={className}
      onClick={handleClick}
      aria-label={
        isFavorited ? t(i18n)`Remove from favorites` : t(i18n)`Add to favorites`
      }
    >
      <HeartIcon
        className={`${iconClassName} ${
          isFavorited
            ? 'text-red-500 fill-red-500'
            : 'text-gray-400 fill-white '
        }`}
      />
    </Button>
  );
}
