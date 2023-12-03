import { FC } from 'react';
import { useTranslations } from 'next-intl';
import s from './SidebarButtons.module.scss';

import { DashboardIcon } from 'components/icons/DashboardIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { TotalsIcon } from 'components/icons/TotalsIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { CartIcon } from 'components/icons/CartIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { TransparentAchiveIcon } from 'components/icons/AchiveIcon';
import { KeyIcon } from 'components/icons/KeyIcon';
import { FlagIcon } from 'components/icons/FlagIcon';
import { ExitIcon } from 'components/icons/ExitIcon';

export const SidebarButtons: FC = () => {
  const t = useTranslations('SellersPage.Sidebar');

  const buttons = [
    { icon: DashboardIcon, text: t('dashboard') },
    { icon: MessageIcon, text: t('messages') },
    { icon: TotalsIcon, text: t('sections') },
    { icon: StoreIcon, text: t('sellers') },
    { icon: CartIcon, text: t('buyers') },
    { icon: PaymentIcon, text: t('financial') },
    { icon: TransparentAchiveIcon, text: t('achievements') },
    { icon: KeyIcon, text: t('security') },
    { icon: FlagIcon, text: t('report') },
    { icon: ExitIcon, text: t('logout') },
  ];

  return (
    <ul className={s.buttons}>
      {buttons.map((button) => (
        <li key={button.text}>
          <button
            type="button"
            className={button.text === t('logout') ? s.logout : ''}
          >
            <button.icon />
            {button.text}
          </button>
        </li>
      ))}
    </ul>
  );
};
