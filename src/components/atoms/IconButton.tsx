import { ReactNode } from 'react';

import { Button } from '../ui/button';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  variant?:
    | 'ghost'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'link';
  className?: string;
  'aria-label'?: string;
}

export default function IconButton({
  icon,
  onClick,
  variant = 'ghost',
  className = 'p-4',
  'aria-label': ariaLabel,
}: IconButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={className}
      aria-label={ariaLabel}
    >
      {icon}
    </Button>
  );
}
