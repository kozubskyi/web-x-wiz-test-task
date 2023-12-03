import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import LikeIcon from 'assets/images/icons/like.svg';
import DislikeIcon from 'assets/images/icons/dislike.svg';

import s from './HelpfulArticle.module.scss';
import Link from 'next/link';
import { ROUTES } from 'constants/routes';

export const HelpfulArticle: FC = () => {
  const t = useTranslations('HeplCenterPage');

  return (
    <div className={s.article}>
      <div className={s.article_main}>
        <span className={s.article_title}>{t('article_tittle')}</span>
        <div className={s.article_buttons}>
          <button>
            <Image src={LikeIcon} width={24} height={24} alt="like" />
          </button>
          <button>
            <Image src={DislikeIcon} width={24} height={24} alt="like" />
          </button>
        </div>
      </div>
      <div className={s.article_looking}>
        <p>
          {t('article_looking')}
          <Link href={ROUTES.PUBLIC.CONTACT_US}>{t('article_contact')}</Link>
        </p>
      </div>
    </div>
  );
};
