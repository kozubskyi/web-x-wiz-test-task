'use client';

import { useTranslations } from 'use-intl';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('ErrorPage');

  return (
    <div>
      <h1 className="text_h3">{t('title')}</h1>
      <p>{error.message}</p>
      <button onClick={reset}>{t('retry')}</button>
    </div>
  );
}
