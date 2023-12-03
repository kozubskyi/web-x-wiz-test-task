import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { ROUTES } from 'constants/routes';

import AddProfileIcon from 'assets/images/icons/dark/add-profile.svg';
import PlusIcon from 'assets/images/icons/dark/cube-plus.svg';
import PaymentIcon from 'assets/images/icons/dark/payment.svg';
import SearchIcon from 'assets/images/icons/dark/search.svg';

import { PlayerBecome } from './PlayerBecome';
import { PlayerList } from './PlayerList';

export const Players: FC = () => {
  const t = useTranslations('Home');

  const sellerItems = [
    { icon: AddProfileIcon, title: t('BecomeSeller.signup') },
    { icon: PlusIcon, title: t('BecomeSeller.create_goods') },
    { icon: PaymentIcon, title: t('BecomeSeller.sell_goods') },
  ];

  const bayerItems = [
    { icon: AddProfileIcon, title: t('BecomeBayer.signup') },
    { icon: SearchIcon, title: t('BecomeBayer.find_goods') },
    { icon: PaymentIcon, title: t('BecomeBayer.buy_goods') },
  ];

  const boostItems = [
    t('BoostGameplay.first_item'),
    t('BoostGameplay.second_item'),
    t('BoostGameplay.third_item'),
  ];

  return (
    <>
      <PlayerBecome
        videoId="KPLWWIOCOOQ"
        title={t('BecomeSeller.title.primary')}
        title_accent={<span> {t('BecomeSeller.title.accent')}</span>}
        subtitle={t('BecomeSeller.subtitle')}
        items={sellerItems}
        href={ROUTES.AUTH.REGISTRATION}
        btn_text={t('BecomeSeller.btn_text')}
        mirror
      />
      <PlayerList
        videoId="M1bhOaLV4FU"
        title={t('BoostGameplay.title.primary')}
        title_accent={<span> {t('BoostGameplay.title.accent')}</span>}
        subtitle={t('BoostGameplay.subtitle')}
        items={boostItems}
        href={ROUTES.PUBLIC.ABOUT}
        btn_text={t('BoostGameplay.read_more')}
        mirror
      />
    </>
  );
};
