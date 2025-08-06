import { NavigationData } from '@/components/organisms/DesktopNavigationContainer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformDesktopNavigation = (data: any): NavigationData => {
  const mainNav = data[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navItems = mainNav.subCategories.map((item: any) => ({
    id: item.id,
    title: item.name,
    subCategories: item.subCategories
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        item.subCategories.map((subItem: any) => ({
          id: subItem.id,
          title: subItem.name,
        }))
      : [],
  }));
  return {
    title: mainNav.name,
    navItems: navItems,
  };
};
