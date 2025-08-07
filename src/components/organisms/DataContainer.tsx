'use client';
import { type ReactNode } from 'react';

import { useApiData } from '@/lib/hooks/useApiData';

interface DataContainerProps<T> {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform?: (data: any) => T;
  fallbackData?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies?: any[];
  children: (props: {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
  }) => ReactNode;
  loadingComponent?: ReactNode;
  errorComponent?: (error: string) => ReactNode;
}

export default function DataContainer<T>({
  url,
  transform,
  fallbackData,
  dependencies,
  children,
  loadingComponent = <div>Loading...</div>,
}: DataContainerProps<T>) {
  const { data, loading, error, refetch } = useApiData({
    url,
    transform,
    fallbackData,
    dependencies,
  });

  if (loading) return <>{loadingComponent}</>;

  return <>{children({ data, loading, error, refetch })}</>;
}
