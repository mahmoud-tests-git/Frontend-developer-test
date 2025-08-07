import { Badge } from '../ui/badge';

interface ProductBadgeProps {
  label: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export default function ProductBadge({
  label,
  variant = 'default',
  className = 'absolute top-4 right-4',
}: ProductBadgeProps) {
  return (
    <Badge variant={variant} className={className}>
      {label}
    </Badge>
  );
}
