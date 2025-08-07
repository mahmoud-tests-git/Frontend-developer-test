import { ReactNode } from 'react';

interface FooterNavSectionProps {
  title: string;
  children: ReactNode;
}

export default function FooterNavSection({
  title,
  children,
}: FooterNavSectionProps) {
  return (
    <div className="flex flex-col gap-3 flex-1">
      <h5 className="text-lg font-semibold mb-1">{title}</h5>
      {children}
    </div>
  );
}
