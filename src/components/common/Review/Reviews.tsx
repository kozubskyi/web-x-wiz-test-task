import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { IReview } from 'types/userTypes';
import { unixTimeToLocalDate } from 'utils/utils';
import { RatingStars } from '../RatingStars';
import { UserAvatar } from '../UserAvatar';

import s from './Review.module.scss';

interface reviewProps {
  reviews: IReview[];
  listClassName?: string;
}

export const Reviews: FC<reviewProps> = ({ reviews, listClassName }) => {
  return (
    <ul className={listClassName}>
      {reviews.map((review) => (
        <li className={s.review} key={review.id}>
          <div className={s.review_top}>
            <div className={s.author}>
              <div className={s.author_image}>
                <UserAvatar
                  avatarURL={review.createdBy.avatarURL}
                  userName={review.createdBy.userName}
                />
              </div>
              <div>
                <span className={s.author_name}>
                  {review.createdBy.userName}
                </span>
                <RatingStars
                  className={s.author_rating}
                  edit={false}
                  value={review.rating}
                />
              </div>
            </div>
            <div className={s.review_date}>
              <time dateTime={unixTimeToLocalDate(+review.createdAt)}>
                {unixTimeToLocalDate(+review.createdAt)}
              </time>
            </div>
          </div>
          <div className={s.review_body}>{review.text}</div>
        </li>
      ))}
    </ul>
  );
};
