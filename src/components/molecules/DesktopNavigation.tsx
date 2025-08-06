'use client';

import { Button } from '../ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import NavItem from '../atoms/NavItem';

interface DesktopNavigationProps {
  title: string;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  navItems: {
    title: string;
    id: number;
    subCategories: {
      id: number;
      title: string;
    }[];
  }[];
}

export default function DesktopNavigation({
  title,
  navItems,
  onOpenChange,
  open = false,
}: DesktopNavigationProps) {
  return (
    <HoverCard
      openDelay={100}
      closeDelay={100}
      onOpenChange={onOpenChange}
      open={open}
    >
      <HoverCardTrigger asChild className="hidden lg:block">
        <Button variant="ghost">
          <h2>{title}</h2>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="p-6 w-screen bg-white border-b py-10 border-gray-200 rounded-none"
        side="bottom"
        align="center"
      >
        <nav className="container mx-auto flex w-1/2 mx-auto flex-col gap-4">
          {navItems.map((item) => (
            <>
              <NavItem
                key={item.id}
                href={`/category/${item.id}`}
                variant="primary"
              >
                <h3>{item.title}</h3>
              </NavItem>
              {item.subCategories &&
                item.subCategories.map((subItem) => (
                  <NavItem key={subItem.id} href={`/category/${subItem.id}`}>
                    <h3>{subItem.title}</h3>
                  </NavItem>
                ))}
            </>
          ))}
        </nav>
      </HoverCardContent>
    </HoverCard>
  );
}
