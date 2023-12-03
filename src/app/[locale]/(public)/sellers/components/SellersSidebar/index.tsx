import { FC } from 'react';
import s from './SellersSidebar.module.scss';

import { SellersProfile } from './SellersProfile';
import { SidebarButtons } from './SidebarButtons';

export const SellersSidebar: FC = () => {
  return (
    <div className={s.sidebar}>
      <SellersProfile />
      <SidebarButtons />
    </div>
  );
};
