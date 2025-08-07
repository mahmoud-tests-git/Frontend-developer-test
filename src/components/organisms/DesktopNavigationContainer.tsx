import { transformDesktopNavigation } from '@/lib/transformers/DesktopNavigation';

import DesktopNavigation from '../molecules/DesktopNavigation';
import { Skeleton } from '../ui/skeleton';

import DataContainer from './DataContainer';
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
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <DataContainer<NavigationData>
      url={`${url}/api/proxy/categories`}
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
