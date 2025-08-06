import { MailIcon } from 'lucide-react';

import ContactInfo from '../atoms/ContactInfo';

interface ContactSectionProps {
  email?: string;
  className?: string;
}

export default function ContactSection({
  email = 'business@calvero.club',
  className = 'flex gap-4 mb-10 text-gray-500 bg-gray-100 w-fit rounded-full p-2 px-4',
}: ContactSectionProps) {
  return (
    <div className={className}>
      <ContactInfo icon={<MailIcon className="size-5" />} text={email} />
    </div>
  );
}
