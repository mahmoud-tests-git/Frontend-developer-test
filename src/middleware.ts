import { NextRequest, NextResponse } from 'next/server';

import locales from '../lingui.config';

const defaultLocale = 'en';

function getRequestLocale(req: NextRequest): string {
  const pathnameHasLocale = locales.locales.some(
    (locale) =>
      req.nextUrl.pathname.startsWith(`/${locale}/`) ||
      req.nextUrl.pathname === `/${locale}`,
  );

  const urlLocale = pathnameHasLocale
    ? req.nextUrl.pathname.split('/')[1]
    : undefined;

  return urlLocale ?? req.cookies.get('NEXT_LOCALE')?.value ?? defaultLocale;
}

export function validateLocale(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`,
  );
  const locale = getRequestLocale(request);

  // if has locale, update cookie, and forward with no changes
  // or if it is robots.txt or sitemap.xml
  if (
    pathnameHasLocale ||
    pathname === '/robots.txt' ||
    /^\/sitemap(-\d+)?\.xml$/.test(pathname)
  ) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', locale);
    return response;
  }

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set('NEXT_LOCALE', locale);
  return response;
}

const middleware = (request: NextRequest) => {
  const response = validateLocale(request);
  return response;
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|auth|_next/image|favicon.ico|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|pdf|xlsx?|zip|webmanifest|map)).*)',
  ],
};
export default middleware;
