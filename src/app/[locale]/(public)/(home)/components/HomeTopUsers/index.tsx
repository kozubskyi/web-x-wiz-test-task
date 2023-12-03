'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { GetTopSeller } from 'types/sellerTypes';
import { GetTopBuyer } from 'types/buyerTypes';

import { Container } from 'ui/components/Container';
import { HomeTopUsersBlock } from './HomeTopUsersBlock';
import { ArtboardBackground } from 'components/backgrounds/ArtboardBackground';

import MarvinImg from 'assets/images/top-sellers/marvin.png';
import KristinImg from 'assets/images/top-sellers/kristin.png';
import ArthurImg from 'assets/images/top-sellers/arthur.png';

import s from './HomeTopUsers.module.scss';

interface HomeTopUsersProps {
  sellersData?: GetTopSeller[] | undefined;
  buyersData?: GetTopBuyer[] | undefined;
}

export const HomeTopUsers: FC<HomeTopUsersProps> = ({
  sellersData,
  buyersData,
}) => {
  const [buyerMode, setBuyerMode] = useState(false);
  const t = useTranslations('Home.TopUsers');

  const handleSwitchOnBuyerMode = () => setBuyerMode(true);
  const handleSwitchOffBuyerMode = () => setBuyerMode(false);

  const exampleSellers: GetTopSeller[] = [
    {
      userName: 'Black, Marvin',
      avatarURL: MarvinImg,
      achievements: ['1', '2,140'],
    },
    {
      userName: 'Cooper, Kristin',
      avatarURL: KristinImg,
      achievements: ['2', '1,940'],
    },
    {
      userName: 'Henry, Arthur',
      avatarURL: ArthurImg,
      achievements: ['3', '1,320'],
    },
  ];

  const exampleBuyers: GetTopSeller[] = [
    {
      userName: 'Black, Marvin',
      avatarURL: MarvinImg,
      achievements: ['1', '3,720'],
    },
    {
      userName: 'Henry, Arthur',
      avatarURL: ArthurImg,
      achievements: ['2', '2,430'],
    },
    {
      userName: 'Cooper, Kristin',
      avatarURL: KristinImg,
      achievements: ['3', '1,290'],
    },
  ];

  return (
    <section className={s.users}>
      <Container className={s.users_container}>
        <div className={s.users_content}>
          <div className={s.users_top}>
            <h2>
              {t('title.primary')}
              <span> {t('title.accent')}</span>
            </h2>
            <p className="text_subtitle">{t('subtitle')}</p>
            <div className={s.users_switcher}>
              <button
                className={`${!buyerMode ? s.active : ''}`}
                onClick={handleSwitchOffBuyerMode}
              >
                {t('sellers')}
              </button>
              <button
                className={`${buyerMode ? s.active : ''}`}
                onClick={handleSwitchOnBuyerMode}
              >
                {t('buyers')}
              </button>
            </div>
          </div>
          <HomeTopUsersBlock
            users={buyerMode ? exampleBuyers : exampleSellers}
            achive={buyerMode ? t('bought') : t('sells')}
          />
        </div>
        <ArtboardBackground className={s.users_bg} />
      </Container>
    </section>
  );
};
