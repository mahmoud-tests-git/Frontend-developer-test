'use client';

import { Button } from '../ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import NavItem from '../atoms/NavItem';
import { NavigationData } from '../organisms/DesktopNavigationContainer';

interface DesktopNavigationProps {
  data: NavigationData;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export default function DesktopNavigation({
  data,
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
          <h2>{data.title}</h2>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="p-6 w-screen bg-white border-b py-10 border-gray-200 rounded-none"
        side="bottom"
        align="center"
      >
        <nav className="container mx-auto flex w-1/2 mx-auto flex-col gap-4">
          {data.navItems.map((item) => (
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
                    <h3 className="text-gray-500 font-normal">
                      {subItem.title}
                    </h3>
                  </NavItem>
                ))}
            </>
          ))}
        </nav>
      </HoverCardContent>
    </HoverCard>
  );
}
