import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container } from 'ui/components/Container';

import ExplanationImg from 'assets/images/home-explanation.png';

import s from './Home.module.scss';

export const HowWorks: FC = () => {
  const t = useTranslations('Home.HowWorks');

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
        <div className={s.explanation_image}>
          <Image
            src={ExplanationImg}
            width={990}
            height={504}
            quality={100}
            alt="How It Works"
          />
        </div>
      </Container>
    </section>
  );
};
