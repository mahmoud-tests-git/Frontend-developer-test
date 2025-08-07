import type { MetadataRoute } from 'next';
import path from 'path';
import fs from 'fs/promises';
import { transformDesktopNavigation } from '@/lib/transformers/DesktopNavigation';

const host = process.env.NEXT_PUBLIC_SITE_URL || 'https://calvero.club';

const calculateActualLastModifiedDate = async (filepath: string) => {
  filepath = path.join(process.cwd(), filepath);
  const stats = await fs.stat(filepath);
  return stats.mtime;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: host,
      lastModified: await calculateActualLastModifiedDate(
        'src/app/[locales]/(home)/page.tsx',
      ),
      alternates: {
        languages: {
          en: `${host}/en`,
          tr: `${host}/tr`,
        },
      },
      priority: 1,
    },
    {
      url: `${host}/login`,
      lastModified: await calculateActualLastModifiedDate(
        'src/app/[locales]/login/page.tsx',
      ),
      alternates: {
        languages: {
          en: `${host}/en/login`,
          tr: `${host}/tr/login`,
        },
      },
      priority: 0.8,
    },
    {
      url: `${host}/register`,
      lastModified: await calculateActualLastModifiedDate(
        'src/app/[locales]/register/page.tsx',
      ),
      alternates: {
        languages: {
          en: `${host}/en/register`,
          tr: `${host}/tr/register`,
        },
      },
      priority: 0.8,
    },
    ...(await getCategories()),
  ];
}

const getCategories = async () => {
  const response = await fetch('https://api.calvero.club/categories');
  if (!response.ok) {
    return [];
  }
  const dataTransformed = transformDesktopNavigation(await response.json());
  return dataTransformed.navItems.flatMap((category) => {
    const main = {
      url: `${host}/category/${category.id}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${host}/en/category/${category.id}`,
          tr: `${host}/tr/category/${category.id}`,
        },
      },
      priority: 0.8,
    };
    const subCategories = category.subCategories.map((subCategory) => ({
      url: `${host}/category/${subCategory.id}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${host}/en/category/${subCategory.id}`,
          tr: `${host}/tr/category/${subCategory.id}`,
        },
      },
      priority: 0.8,
    }));
    return [main, ...subCategories];
  });
};
