'use client';

import { ReactNode } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { t } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';

import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

interface MobileMenuProps {
  trigger: ReactNode;
}

export default function MobileMenu({ trigger }: MobileMenuProps) {
  const { i18n } = useLingui();

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="p-4">
        <SheetHeader className="text-center mt-4">
          <SheetTitle className="text-xl mx-auto font-bold">Calvero</SheetTitle>
        </SheetHeader>
        <nav className="container mx-auto flex p-4 mx-auto flex-col gap-4">
          <Button
            variant="ghost"
            className="flex justify-between w-full items-center my-2 py-6"
          >
            <h3>{t(i18n)`Clothing`}</h3>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
