'use client';
import Error from 'next/error';

import { IbmPlexSans } from 'assets/fonts/google-fonts';

export default function NotFound() {
  return (
    <html lang="en">
      <body className={IbmPlexSans.className}>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
