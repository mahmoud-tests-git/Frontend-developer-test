import { ReactNode } from 'react';

interface ContactInfoProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

export default function ContactInfo({
  icon,
  text,
  className = 'flex items-center gap-2 hover:text-black',
}: ContactInfoProps) {
  return (
    <p className={className}>
      {icon}
      {text}
    </p>
  );
}
