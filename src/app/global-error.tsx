'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  const router = useRouter();
  useEffect(() => {
    console.error('Unhandled error:', error);
  }, [error]);

  if (!reset) {
    reset = () => {
      router.push('/');
    };
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <Image src="/favicon.webp" alt="404" width={100} height={100} />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        500 - Internal Server Error
      </h1>
      <p className="mt-2 text-center text-gray-600 dark:text-gray-300 max-w-sm">
        {error.message ||
          'Something went wrong on our servers. Please try again.'}
      </p>
      <Button className="mt-6" variant="outline" onClick={() => reset()}>
        Retry
      </Button>
    </div>
  );
}
