import { ReactNode } from 'react';

interface FormSectionProps {
  children: ReactNode;
  className?: string;
}

export default function FormSection({
  children,
  className = 'space-y-8',
}: FormSectionProps) {
  return <div className={className}>{children}</div>;
}
