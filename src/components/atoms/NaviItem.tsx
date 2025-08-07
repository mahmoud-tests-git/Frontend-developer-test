import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function NavItem({
  href,
  children,
  className = '',
  variant = 'primary',
}: NavItemProps) {
  const variantClasses = {
    primary: 'font-bold',
    secondary: 'text-gray-500',
  };

  return (
    <Link
      href={href}
      className={`${variantClasses[variant]} ${className} text-black`}
    >
      {children}
    </Link>
  );
}
