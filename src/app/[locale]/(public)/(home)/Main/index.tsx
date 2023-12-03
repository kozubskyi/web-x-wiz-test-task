import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container } from 'ui/components/Container';
import { Socials } from './Socials';
import { LinkButton } from 'ui/components/Button';
import { Cards } from './Cards';

import PreviewImg from 'assets/images/home-preview.png';

import s from './Main.module.scss';

export const Main: FC = () => {
  const t = useTranslations('Home.Main');

  return (
    <section className={s.main}>
      <Container className={s.main_container}>
        <div className={s.main_content}>
          <h1>
            {t('title.first_path')}
            <span> {t('title.accent')}</span>
            <br />
            {t('title.second_path')}
          </h1>
          <p className="main-subtitle">{t('subtitle')}</p>
          <LinkButton className={s.main_button} href="">
            {t('start_btn')}
          </LinkButton>
        </div>
        <div className={s.main_block}>
          <div>
            <Image
              src={PreviewImg}
              width={896}
              height={1060}
              quality={100}
              alt="Game Vendor Preview"
            />
          </div>
          <Socials />
        </div>
      </Container>
      <Cards />
    </section>
  );
};
