import DataContainer from './DataContainer';

import DesktopNavigation from '../molecules/DesktopNavigation';

import { transformDesktopNavigation } from '@/lib/transformers/DesktopNavigation';
import { Skeleton } from '../ui/skeleton';
export type NavigationData = {
  title: string;
  navItems: {
    id: number;
    title: string;
    subCategories: {
      id: number;
      title: string;
    }[];
  }[];
};

export default function DesktopNavigationContainer({
  onOpenChange,
  open,
}: {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}) {
  return (
    <DataContainer<NavigationData>
      url="https://api.calvero.club/categories"
      transform={transformDesktopNavigation}
      loadingComponent={<Skeleton className="w-24 h-10" />}
    >
      {({ data }) => {
        if (!data) return null;
        return (
          <DesktopNavigation
            data={data}
            onOpenChange={onOpenChange}
            open={open}
          />
        );
      }}
    </DataContainer>
  );
}
