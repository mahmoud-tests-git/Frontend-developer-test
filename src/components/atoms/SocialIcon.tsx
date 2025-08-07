import Link from 'next/link';
import { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  className?: string;
  'aria-label'?: string;
}

export default function SocialIcon({
  href,
  icon,
  className = 'rounded-full size-12 bg-gray-200 grid place-items-center hover:bg-gray-300',
  'aria-label': ariaLabel,
}: SocialIconProps) {
  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {icon}
    </Link>
  );
}
