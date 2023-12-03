'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

import { navVariables } from './nav-variables';

import { Container } from 'ui/components/Container';

import ArrowRight from 'assets/images/icons/arrows/arrow-right.svg';

import s from './NavigationPanel.module.scss';
import { locales } from 'constants/locales';

export const NavigationPanel: FC = () => {
  const t = useTranslations('NavigationPanel');
  const pathname = usePathname();
  const paths = pathname
    .split('/')
    .filter((path, index) => path !== locales[index]);

  return (
    <div className={s.nav_wrapper}>
      <Container>
        <nav className={s.nav}>
          <ul className={s.nav_list}>
            {paths &&
              paths.map((path, index) => {
                const currentUrl =
                  paths.slice(0, paths.indexOf(path) + 1).join('/') || '/';
                const isActive = index === paths.length - 1;
                const linkClassName = `${s.nav_link} ${
                  isActive ? s.nav_link_active : ''
                }`.trim();

                const linkName = navVariables[currentUrl]
                  ? t(navVariables[currentUrl])
                  : path.replace(/_/g, ' ');

                return (
                  <li className={s.nav_item} key={index}>
                    <Link className={linkClassName} href={currentUrl}>
                      {linkName}
                    </Link>
                    {!isActive && (
                      <Image
                        src={ArrowRight}
                        width={24}
                        height={24}
                        alt="arrow right"
                        className={s.nav_arrow}
                      />
                    )}
                  </li>
                );
              })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};
