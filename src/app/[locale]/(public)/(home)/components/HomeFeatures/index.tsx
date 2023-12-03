import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container } from 'ui/components/Container';

import FeedbackIcon from 'assets/images/icons/boxes/profile-feedback.svg';
import SecurityIcon from 'assets/images/icons/boxes/security.svg';
import SuccessSecurityIcon from 'assets/images/icons/boxes/success-security.svg';

import s from './HomeFeatures.module.scss';
import { Cards } from 'components/common/Cards';

export const HomeFeatures: FC = () => {
  const t = useTranslations('Home.Features');

  const cards = [
    {
      icon: FeedbackIcon,
      title: t('Cards.feedback_title'),
      subtitle: t('Cards.feedback_subtitle'),
    },
    {
      icon: SuccessSecurityIcon,
      title: t('Cards.protection_title'),
      subtitle: t('Cards.protection_subtitle'),
    },
    {
      icon: SecurityIcon,
      title: t('Cards.security_title'),
      subtitle: t('Cards.security_subtitle'),
    },
  ];

  return (
    <section className={s.explanation}>
      <Container>
        <div className={s.explanation_top}>
          <h2>
            {t('title.primary')}
            <span> {t('title.accent')}</span>
          </h2>
          <p className="text_subtitle">{t('subtitle')}</p>
        </div>
        <Cards cards={cards} />
      </Container>
    </section>
  );
};
