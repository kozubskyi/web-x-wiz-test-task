'use client';
import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import s from './TopSellers.module.scss';

import { IExampleUser } from '..'
import { AchiveIcon } from 'components/icons/AchiveIcon';

const numberWithCommas = (number: number) => {
  return new Intl.NumberFormat('en-US').format(number);
};

interface TopSellersProps {
  allSellers: IExampleUser[];
}

export const TopSellers = ({ allSellers }: TopSellersProps) => {
  const t = useTranslations('SellersPage.Stats');

  const filterButtons = [
    t('TopSellersFilter.all_time'),
    t('TopSellersFilter.this_year'),
    t('TopSellersFilter.this_month'),
  ];

  const [topSellers, setTopSellers] = useState<IExampleUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState(filterButtons[0]);

  // Fetch Top Sellers
  useEffect(() => {
    setTopSellers(
      [...allSellers]
        .sort((userA, userB) => userB.sells.quantity - userA.sells.quantity)
        .slice(0, 5)
    );
    setLoading(false);
  }, []);

  return (
    <div className={s.top_sellers}>
      <div className={s.top_sellers_header}>
        <h3>{t('top_sellers')}</h3>
        <div className={s.filter}>
          {filterButtons.map((text) => (
            <button
              key={text}
              type="button"
              className={text === activeFilter ? s.active : ''}
              onClick={() => setActiveFilter(text)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {topSellers.map((user, i) => (
            <li key={user.email}>
              <div className={s.card_image}>
                <Image
                  src={user.avatarURL}
                  width={80}
                  height={80}
                  alt={user.userName}
                />
                <span className={i === 0 ? s.primary : s.secondary}>
                  #{i + 1}
                </span>
              </div>
              <div className={s.card_body}>
                <h4>{user.userName}</h4>
                <span className={i === 0 ? s.gold : ''}>
                  <AchiveIcon />
                  {numberWithCommas(user.sells.quantity)}{' '}
                  {t('TopSellersFilter.sells')}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
