'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavigationLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export default function NavigationLink({
  href,
  children,
  icon,
  iconPosition = 'left',
  className = 'text-sm text-gray-500 flex items-center gap-2',
}: NavigationLinkProps) {
  return (
    <Link href={href} className={className}>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </Link>
  );
}
