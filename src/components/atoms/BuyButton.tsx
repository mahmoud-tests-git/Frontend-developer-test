'use client';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';

import { Button } from '../ui/button';

interface BuyButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

export default function BuyButton({
  label,
  onClick,
  disabled = false,
  className = 'px-4 h-10 rounded-none rounded-tl-xl flex-1',
  variant = 'default',
}: BuyButtonProps) {
  const { i18n } = useLingui();

  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label || t(i18n)`Buy Now`}
    </Button>
  );
}
