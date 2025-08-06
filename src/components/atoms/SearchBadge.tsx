'use client';
import { Badge } from '../ui/badge';

interface SearchBadgeProps {
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export default function SearchBadge({
  label,
  onClick,
  variant = 'secondary',
  className = 'p-2',
}: SearchBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={`${className} ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
      onClick={onClick}
    >
      {label}
    </Badge>
  );
}
