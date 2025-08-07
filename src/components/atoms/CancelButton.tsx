'use client';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';

import { Button } from '../ui/button';

interface CancelButtonProps {
  onClick: () => void;
  label?: string;
  variant?:
    | 'ghost'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'link';
  className?: string;
}

export default function CancelButton({
  onClick,
  label,
  variant = 'ghost',
  className,
}: CancelButtonProps) {
  const { i18n } = useLingui();

  return (
    <Button variant={variant} onClick={onClick} className={className}>
      {label || t(i18n)`Cancel`}
    </Button>
  );
}
