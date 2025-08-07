import { InstagramIcon, TwitterIcon } from 'lucide-react';

import SocialIcon from '../atoms/SocialIcon';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({
  className = 'flex gap-4 text-gray-500',
  iconClassName,
}: SocialLinksProps) {
  return (
    <div className={className}>
      <SocialIcon
        href="/"
        icon={<InstagramIcon className="size-8" />}
        className={iconClassName}
        aria-label="Follow us on Instagram"
      />
      <SocialIcon
        href="/"
        icon={<TwitterIcon className="size-8" />}
        className={iconClassName}
        aria-label="Follow us on Twitter"
      />
    </div>
  );
}
