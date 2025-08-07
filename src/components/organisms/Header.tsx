'use client';

import { useState } from 'react';

import Logo from '../atoms/Logo';
import DesktopNavigation from '../molecules/DesktopNavigation';
import ActionButtons from '../molecules/ActionButtons';
import SearchCards from '../molecules/SearchCard';
import DesktopNavigationContainer from './DesktopNavigationContainer';
import { useRouter } from 'next/navigation';
export default function Header() {
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
        />
      </header>
      {searchOpen && <SearchCards onCancel={() => setSearchOpen(false)} />}
    </div>
  );
}
