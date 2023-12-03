'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'use-intl';

import { ROUTES } from 'constants/routes';

import s from '../Header.module.scss';

const nav_list = [
  { name: 'home', path: ROUTES.HOME },
  { name: 'categories', path: ROUTES.PUBLIC.CATEGORIES },
  { name: 'sellers', path: ROUTES.PUBLIC.SELLERS },
  { name: 'help_center', path: ROUTES.PUBLIC.HELP_CENTER },
  { name: 'contact_us', path: ROUTES.PUBLIC.CONTACT_US },
];

export const HeaderNav: FC = () => {
  const t = useTranslations('Header');

  return (
    <nav className={s.header_menu}>
      <ul className={s.header_list}>
        {nav_list.map((link) => (
          <li key={link.name}>
            <Link href={link.path} className={s.header_link}>
              {t(`Nav.${link.name}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
