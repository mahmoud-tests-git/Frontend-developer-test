import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <Image src="/favicon.webp" alt="404" width={100} height={100} />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        404 – Page Not Found
      </h1>
      <p className="mt-2 text-center text-gray-600 dark:text-gray-300 max-w-sm">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href={'/'}>
        <Button className="mt-6" variant="outline">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
