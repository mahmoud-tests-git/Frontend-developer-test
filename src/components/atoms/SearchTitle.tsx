interface SearchTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SearchTitle({
  children,
  className = 'font-semibold',
}: SearchTitleProps) {
  return <h4 className={className}>{children}</h4>;
}
