'use client';
import { FC, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

import { animationService } from 'utils/services/animation-service';
import { ROUTES } from 'constants/routes';

import { Container } from 'ui/components/Container';
import { MinorLinkButton, SecondaryLinkButton } from 'ui/components/Button';
import { LongArrowRightIcon } from 'components/icons/ArrowIcons';

import ArknightsIcon from 'assets/images/maketplaces/arknights.png';
import DiabloIcon from 'assets/images/maketplaces/diablo-gold.png';
import BattleNetIcon from 'assets/images/maketplaces/battle-net.png';
import WowIcon from 'assets/images/maketplaces/world-of-warcraft.png';

import s from './Home.module.scss';

export const TopSelling: FC = () => {
  const t = useTranslations('Home.TopSelling');

  const cards = [
    {
      title: t('arknights_title'),
      icon: ArknightsIcon,
      value: 100,
      width: 170,
      height: 48,
    },
    {
      title: t('diablo_title'),
      icon: DiabloIcon,
      value: 250,
      width: 162,
      height: 62,
    },
    { title: t('battle_title'), icon: BattleNetIcon, value: 250 },
    { title: t('wow_title'), icon: WowIcon, value: 300 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <section className={s.selling}>
      <Container>
        <div className={s.selling_top}>
          <h2>
            {t('title.primary')}
            <span> {t('title.accent')}</span>
          </h2>
          <SecondaryLinkButton
            className={s.selling_all}
            href={ROUTES.PUBLIC.CATEGORIES}
          >
            {t('all')}
            <LongArrowRightIcon />
          </SecondaryLinkButton>
        </div>
        <ul className={s.selling_cards} ref={ref}>
          {cards.map((card, index) => (
            <motion.li
              {...animationService.scaleOut({ index, controls: mainControls })}
              className={s.card}
              key={index}
            >
              <div className={s.card_top}>
                <Image
                  src={card.icon}
                  width={card.width || 72}
                  height={card.height || 72}
                  alt={card.title}
                />
              </div>
              <div className={s.card_body}>
                <span className={s.card_title}>{card.title}</span>
                <span className={s.card_value}>
                  +{card.value} {t('online_seller')}
                </span>
              </div>
              <div className={s.card_footer}>
                <MinorLinkButton className={s.card_see} href="">
                  {t('see_items')}
                </MinorLinkButton>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
