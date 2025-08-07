import { InstagramIcon, TwitterIcon } from 'lucide-react';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import NavItem from '../atoms/NavItem';
import ScrollingText from '../atoms/ScrollingText';
import Copyright from '../atoms/Copyright';
import SocialCard from '../molecules/SocialCard';
import FooterNavSection from '../molecules/FooterNavSection';
import SocialLinks from '../molecules/SocialLinks';
import ContactSection from '../molecules/ContactSection';
export default function Footer() {
  const { i18n } = useLingui();
  return (
    <div className="container">
      <footer className="flex flex-col">
        <div className="flex gap-6 mb-10">
          <SocialCard
            icon={<TwitterIcon className="size-8" />}
            title="Twitter"
            description="Follow us for updates, insights, and more"
            href="https://x.com/calvero"
          />
          <SocialCard
            icon={<InstagramIcon className="size-8" />}
            title="Instagram"
            description="See our latest posts, stories, and behind-the-scenes moments"
            href="https://www.instagram.com/calvero"
          />
        </div>
        <div className="relative py-6 mb-8 border-y border-gray-200">
          <ScrollingText text="Calevro" />
        </div>
        <div>
          <nav className="flex flex-col gap-6 lg:flex-row">
            <FooterNavSection title={t(i18n)`Company`}>
              <NavItem
                href="/"
                className="font-normal text-gray-600 hover:text-black"
              >
                {t(i18n)`Home`}
              </NavItem>
              <NavItem
                href="/login"
                className="font-normal text-gray-600 hover:text-black"
              >
                {t(i18n)`Login`}
              </NavItem>
              <NavItem
                href="/register"
                className="font-normal text-gray-600 hover:text-black"
              >
                {t(i18n)`Register`}
              </NavItem>
              <NavItem
                href="/"
                className="font-normal text-gray-600 hover:text-black"
              >
                {t(i18n)`Help`}
              </NavItem>
            </FooterNavSection>
            <div className="flex flex-col gap-6 flex-1">
              <FooterNavSection title={t(i18n)`Follow Us`}>
                <SocialLinks iconClassName="rounded-full size-12 bg-gray-200 grid place-items-center hover:bg-gray-300" />
              </FooterNavSection>
              <FooterNavSection title={t(i18n)`Contact Us`}>
                <ContactSection />
              </FooterNavSection>
            </div>
          </nav>
        </div>
        <div className="border-t border-gray-200 py-6">
          <Copyright companyName="Calvero" />
        </div>
      </footer>
    </div>
  );
}
