'use client';

import ProductCard from '@/components/organisms/ProductCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { t } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export default function Home() {
  const { favourites } = useSelector((state: RootState) => state.favourites);

  const { i18n } = useLingui();
  return (
    <div className="container mx-auto flex flex-col gap-10 my-10 ">
      <Card>
        <CardHeader>
          <CardTitle>{t(i18n)`Favourites`}</CardTitle>
          <CardDescription>{t(i18n)`The products you love`}</CardDescription>
        </CardHeader>
        <CardContent>
          {favourites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-10 gap-6 place-items-center">
              {favourites.map((product) => (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  src={product.img}
                  alt={product.title}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <div className="text-center w-full text-gray-500">
              {t(i18n)`No favourites yet`}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
