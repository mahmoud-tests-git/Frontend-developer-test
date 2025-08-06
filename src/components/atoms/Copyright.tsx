interface CopyrightProps {
  companyName: string;
  year?: number;
  className?: string;
}

export default function Copyright({
  companyName,
  year = new Date().getFullYear(),
  className = 'text-center text-gray-500 text-sm',
}: CopyrightProps) {
  return (
    <p className={className}>
      &copy; {year} {companyName}. All rights reserved.
    </p>
  );
}
