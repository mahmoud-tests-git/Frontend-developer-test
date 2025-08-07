'use client';

import { useState } from 'react';

import Logo from '../atoms/Logo';
import DesktopNavigation from '../molecules/DesktopNavigation';
import ActionButtons from '../molecules/ActionButtons';
import SearchCards from '../molecules/SearchCard';
import DesktopNavigationContainer from './DesktopNavigationContainer';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@lingui/core';
export default function Header() {
  const pathname = usePathname();

  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleUserClick = () => {};

  const handleFavouritesClick = () => {
    router.push('/favourites');
  };

  const handleChangeLanguage = () => {
    const pathLocale = pathname.split('/')[1];
    const newLocale = pathLocale === 'tr' ? 'en' : 'tr';
    i18n.activate(newLocale);
    const newPath = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${newPath}`);
  };

  return (
    <div className="container mx-auto px-4 border-b border-gray-200 relative">
      {(searchOpen || navOpen) && (
        <div
          className="
            fixed inset-0 z-30
            bg-white/30                   
            backdrop-blur-sm               
            transition-opacity duration-200
          "
        />
      )}
      <header className="flex justify-between items-center py-3 relative z-40">
        <Logo />

        <DesktopNavigationContainer open={navOpen} onOpenChange={setNavOpen} />

        <ActionButtons
          onSearchClick={handleSearchClick}
          onUserClick={handleUserClick}
          onFavouritesClick={handleFavouritesClick}
          onChangeLanguage={handleChangeLanguage}
        />
      </header>
      {searchOpen && <SearchCards onCancel={() => setSearchOpen(false)} />}
    </div>
  );
}
