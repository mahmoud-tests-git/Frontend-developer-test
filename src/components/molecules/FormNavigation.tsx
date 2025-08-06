'use client';
import { ReactNode } from 'react';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';

import NavigationLink from '../atoms/NavigationLink';

interface FormNavigationProps {
  signupText?: string;
  signupLinkText?: string;
  signupHref?: string;
  backToHomeHref?: string;
  backIcon?: ReactNode;
  className?: string;
}

export default function FormNavigation({
  signupText,
  signupLinkText,
  signupHref,
  backToHomeHref = '/',
  backIcon,
  className = 'flex flex-col gap-4',
}: FormNavigationProps) {
  const { i18n } = useLingui();

  return (
    <div className={className}>
      {signupText && signupLinkText && signupHref && (
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">{signupText}</p>
          <NavigationLink
            href={signupHref}
            className="text-black text-sm font-semibold"
          >
            {signupLinkText}
          </NavigationLink>
        </div>
      )}

      <NavigationLink href={backToHomeHref} icon={backIcon} iconPosition="left">
        {t(i18n)`Back to Home`}
      </NavigationLink>
    </div>
  );
}
