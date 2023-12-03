import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { AuthProvider } from 'utils/providers/AuthProvider';

import { generalMetaData } from 'metadata/metadata';

import { IbmPlexSans } from 'assets/fonts/google-fonts';

import 'assets/styles/globals.scss';
import { ReactThemeProvider } from 'utils/providers/ThemeProvider';
import { ShadeBackground } from 'components/backgrounds/ShadeBackground';
import Script from 'next/script';

export const metadata: Metadata = generalMetaData;

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = params?.locale ?? 'en';
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={IbmPlexSans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReactThemeProvider>
            <AuthProvider>
              <div className="wrapper">{children}</div>
              <ShadeBackground />
            </AuthProvider>
          </ReactThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
