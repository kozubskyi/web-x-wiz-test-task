import { Header } from 'components/header';
import { ROUTES } from 'constants/routes';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container } from 'ui/components/Container';

interface NotFoundProps {
  message?: string;
}

export default function NotFound({ message }: NotFoundProps) {
  const t = useTranslations('NotFoundPage');
  const custom_message = t('message');

  return (
    <div>
      <Header />
      <Container>
        <div style={{ minHeight: '500px' }}>
          <h2>{t('title')}</h2>
          <p>{message ? message : custom_message}</p>
          <Link href={ROUTES.HOME}>{t('toHome')}</Link>
        </div>
      </Container>
    </div>
  );
}
