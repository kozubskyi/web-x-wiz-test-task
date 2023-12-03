import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { RatingStars } from '../RatingStars';
import { EnumRatingColors } from 'types/enums';

import s from './SellerRating.module.scss';
import { RatingsStats } from 'types/userTypes';

interface SellerRatingProps {
  ratingStats?: RatingsStats;
  className?: string;
}

export const SellerRating: FC<SellerRatingProps> = ({
  ratingStats,
  className,
}) => {
  const t = useTranslations('Rating');

  const rating = [
    { num: 5, prc: 79, color: EnumRatingColors.green, review: 75 },
    { num: 4, prc: 52, color: EnumRatingColors.lightGreen, review: 66 },
    { num: 3, prc: 44, color: EnumRatingColors.yellow, review: 51 },
    { num: 2, prc: 37, color: EnumRatingColors.orange, review: 32 },
    { num: 1, prc: 15, color: EnumRatingColors.red, review: 6 },
  ];

  return (
    <div className={`${s.rating} ${className ? className : ''}`.trim()}>
      <div className={s.rating_top}>
        <span className={s.rating_value}>4</span>
        <div className={s.rating_box}>
          <RatingStars className={s.rating_stars} edit={false} value={4} />
          <span className={s.rating_review}>120 {t('review')}</span>
        </div>
      </div>
      <div className={s.rating_body}>
        <ul>
          {rating.map((item, index) => (
            <li className={s.rating_item} key={index}>
              <span className={s.rating_num}>{item.num}</span>
              <div className={s.rating_line}>
                <span
                  style={{
                    width: `${item.prc}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
              <span className={s.rating_prc}>{item.prc}%</span>
              <span className={s.rating_item_review}>{item.review}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
