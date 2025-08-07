import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import LoginForm from './LoginForm';

export default function LoginDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="lg:max-w-[1000px]  flex p-0">
        <DialogTitle className="sr-only">Login</DialogTitle>
        <span className="flex-1">
          <LoginForm />
        </span>
        <Image
          src="/login-logo.webp"
          alt="login-bg"
          width={500}
          height={500}
          className="flex-1 hidden lg:block"
        />
      </DialogContent>
    </Dialog>
  );
}
