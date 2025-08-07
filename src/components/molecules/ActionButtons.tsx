'use client';

import {
  GlobeIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from 'lucide-react';

import { Button } from '../ui/button';
import IconButton from '../atoms/IconButton';

import MobileMenu from './MobileMenu';
import LoginDialog from '../organisms/LoginDialog';

interface ActionButtonsProps {
  onSearchClick?: () => void;
  onUserClick?: () => void;
  onFavouritesClick?: () => void;
  onChangeLanguage?: () => void;
}

export default function ActionButtons({
  onSearchClick,
  onUserClick,
  onFavouritesClick,
  onChangeLanguage,
}: ActionButtonsProps) {
  return (
    <div className="flex ">
      <MobileMenu
        trigger={
          <Button variant="ghost" className="block lg:hidden">
            <MenuIcon className="w-5 h-5" />
          </Button>
        }
      />
      <IconButton
        icon={<HeartIcon className="w-5 h-5" />}
        onClick={onFavouritesClick}
        aria-label="Favourites"
      />
      <IconButton
        icon={<SearchIcon className="w-5 h-5" />}
        onClick={onSearchClick}
        aria-label="Search"
      />
      <IconButton
        icon={<GlobeIcon className="w-5 h-5" />}
        onClick={onChangeLanguage}
        aria-label="Change Language"
      />

      <LoginDialog>
        <IconButton
          icon={<UserIcon className="w-5 h-5" />}
          onClick={onUserClick}
          aria-label="User menu"
        />
      </LoginDialog>
    </div>
  );
}
