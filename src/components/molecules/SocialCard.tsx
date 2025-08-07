import Link from 'next/link';
import { ReactNode } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface SocialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function SocialCard({
  icon,
  title,
  description,
  href,
}: SocialCardProps) {
  return (
    <Card className="py-4 flex-1 hover:scale-105 transition-all duration-300 group">
      <CardHeader>
        <CardTitle className="grid place-items-center bg-black rounded-full size-16 mx-auto group-hover:bg-white group-hover:border border-black border-dashed transition-all duration-300">
          <Link
            href={href}
            className="text-white z-10 block group-hover:text-black"
          >
            {icon}
          </Link>
          <span className="absolute z-0 size-12 animate-ping group-hover:hidden rounded-full bg-black block"></span>
        </CardTitle>
        <CardContent className="pb-0 pt-4">
          <h5 className="text-lg font-semibold mb-1 text-center">{title}</h5>
          <p className="text-center text-base text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
