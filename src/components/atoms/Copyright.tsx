import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
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
  const { i18n } = useLingui();
  return (
    <p className={className}>
      &copy; {year} {companyName}. {t(i18n)`All rights reserved.`}
    </p>
  );
}
