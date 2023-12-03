import createMiddleware from 'next-intl/middleware';

import { locales, defaultLocale } from './constants/locales';

export default createMiddleware({
  locales: locales,

  defaultLocale: defaultLocale.locale,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
