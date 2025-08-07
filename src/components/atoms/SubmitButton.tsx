import { ReactNode } from 'react';

import { Button } from '../ui/button';

interface SubmitButtonProps {
  children: ReactNode;
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

export default function SubmitButton({
  children,
  disabled = false,
  className = 'w-full',
  variant = 'default',
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant={variant}
      className={className}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
