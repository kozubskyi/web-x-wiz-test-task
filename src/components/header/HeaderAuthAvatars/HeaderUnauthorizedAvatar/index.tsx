'use client';
import { FC, useRef, useState } from 'react';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { ROUTES } from 'constants/routes';

import { MoonIcon } from 'components/icons/MoonIcon';
import { ThemeSwitcher } from 'components/common/ThemeSwitcher';
import { AddProfileIcon } from 'components/icons/AddProfileIcon';
import { ProfileIcon } from 'components/icons/ProfileIcon';
import { DropDown } from 'ui/components/DropDown';

import s from '../../Header.module.scss';

export const HeaderUnauthorizedAvatar: FC = () => {
  const t = useTranslations('Header.Dropdowns');

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => setIsOpen(true);
  const onMouseLeave = () => setIsOpen(false);

  const accountBox = {
    title: t('account'),
    list: [
      {
        title: t('Unauthorized.login'),
        icon: <ProfileIcon />,
        href: ROUTES.AUTH.LOGIN,
      },
      {
        title: t('Unauthorized.registration'),
        icon: <AddProfileIcon />,
        href: ROUTES.AUTH.REGISTRATION,
      },
    ],
  };

  return (
    <div
      className={s.dropdown}
      ref={parentRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`${s.header_boxIcon} ${s.header_boxIcon_active}`}>
        <ProfileIcon />
      </div>
      <DropDown
        isOpen={isOpen}
        parent={parentRef}
        className={s.dropdown_container}
      >
        <div className={s.dropdown_box}>
          <span className={s.dropdown_title}>{accountBox.title}</span>
          <ul className={s.dropdown_list}>
            {accountBox.list.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className={s.dropdown_btn}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.dropdown_box}>
          <span className={s.dropdown_title}>{t('theme')}</span>
          <ul className={s.dropdown_list}>
            <li className={s.dropdown_btn}>
              <MoonIcon />
              <span>{t('dark_mode')}</span>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </DropDown>
    </div>
  );
};
