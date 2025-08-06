import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  href?: string;
  showText?: boolean;
  showIcon?: boolean;
  className?: string;
}

export default function Logo({
  href = '/',
  showText = true,
  showIcon = true,
  className = '',
}: LogoProps) {
  const content = (
    <div className={`text-3xl font-bold flex items-center gap-2 ${className}`}>
      {showIcon && (
        <Image
          src="/favicon.webp"
          alt="Calvero"
          width={32}
          height={32}
          className="lg:hidden rounded-full"
        />
      )}
      {showText && <h1 className="hidden lg:block">Calvero</h1>}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
