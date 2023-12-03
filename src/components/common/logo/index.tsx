'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDarkTheme } from 'utils/hooks/useDarkTheme';

import { ROUTES } from 'constants/routes';

import LogoWhiteMode from 'assets/images/icons/logo.svg';
import LogoDarkMode from 'assets/images/icons/logo-white.svg';

import s from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  let defaultImage = LogoWhiteMode;

  const { isDark } = useDarkTheme();
  if (isDark) {
    defaultImage = LogoDarkMode;
  }

  return (
    <div className={`${className ? className : ''} ${s.logo}`.trim()}>
      <Link href={ROUTES.HOME} className={s.logo_image}>
        <Image
          src={defaultImage}
          alt="Game Vendor Logo"
          width={171}
          height={36}
        />
      </Link>
    </div>
  );
};
