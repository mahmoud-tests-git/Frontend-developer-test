'use client';

import { useState } from 'react';

import Logo from '../atoms/Logo';
import DesktopNavigation from '../molecules/DesktopNavigation';
import ActionButtons from '../molecules/ActionButtons';
import SearchCards from '../molecules/SearchCard';
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleUserClick = () => {};

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

        <DesktopNavigation open={navOpen} onOpenChange={setNavOpen} />

        <ActionButtons
          onSearchClick={handleSearchClick}
          onUserClick={handleUserClick}
        />
      </header>
      {searchOpen && <SearchCards onCancel={() => setSearchOpen(false)} />}
    </div>
  );
}
