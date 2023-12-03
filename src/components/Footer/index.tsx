import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Container } from 'ui/components/Container';
import { FooterDetails } from './components/FooterDetails';
import { FooterInfoColumns } from './components/FooterInfoColumns';
import { FooterPayments } from './components/FooterPayments';

import { LINKS } from 'constants/links';
import { ROUTES } from 'constants/routes';

import s from './Footer.module.scss';

export const Footer: FC = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={s.footer}>
      <div className={s.footer_body}>
        <Container>
          <div className={s.footer_columns}>
            <FooterDetails />
            <FooterInfoColumns />
            <FooterPayments />
          </div>
        </Container>
      </div>
      <div className={s.footer_bottom}>
        <Container className={s.footer_bottom_container}>
          <div className={s.footer_webXwiz}>
            <p>
              {t('by_webXwiz.primary')}
              <Link href={LINKS.WEBXWIZ} target="_blank">
                {t('by_webXwiz.accent')}
              </Link>
            </p>
          </div>
          <div className={s.footer_policy}>
            <Link href={ROUTES.PUBLIC.TEARMS_CONDITIONS} target="_blank">
              {t('terms_conditions')}
            </Link>
            <Link href={ROUTES.PUBLIC.PRIVACY_POLICY} target="_blank">
              {t('privacy_policy')}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};
