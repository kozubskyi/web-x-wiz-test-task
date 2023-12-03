'use client';
import { FC, useEffect, useRef, useState } from 'react';

import { IUser } from 'types/userTypes';

import { Container } from 'ui/components/Container';
import { Logo } from 'components/common/logo';
import { Lang } from 'components/lang';

import { HeaderNav } from './HeaderNav';
import { HeaderUnauthorizedAvatar } from './HeaderAuthAvatars/HeaderUnauthorizedAvatar';
import { HeaderAuthorizedAvatar } from './HeaderAuthAvatars/HeaderAuthorizedAvatar';

import s from './Header.module.scss';
import { SeacrhIcon } from 'components/icons/social/SeacrhIcon';

interface HeaderProps {
  user?: IUser;
  className?: string;
  isPaddingTop?: boolean;
  isFixedOnScroll?: boolean;
}

export const Header: FC<HeaderProps> = ({
  user = true,
  className,
  isPaddingTop = true,
  isFixedOnScroll = true,
}) => {

  const [headerActive, setHeaderActive] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setHeaderActive(true);
    } else if (scrolled <= 0) {
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    if (!isFixedOnScroll) return;

    window.addEventListener('scroll', toggleVisible);
    return () => {
      document.documentElement.classList.remove('header-active');
      document.body.style.removeProperty('padding-top');
      setHeaderActive(false);
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  useEffect(() => {
    if (headerActive && headerRef.current) {
      document.documentElement.classList.add('header-active');
      if (isPaddingTop) {
        document.body.style.paddingTop =
          headerRef.current?.offsetHeight / 16 + 'rem' || '0px';
      }
    } else {
      document.documentElement.classList.remove('header-active');
      if (isPaddingTop) {
        document.body.style.removeProperty('padding-top');
      }
    }
  }, [headerActive]);

  return (
    <header
      ref={headerRef}
      className={`${s.header} ${headerActive ? s.header_active : ''} ${className ? className : ''
        }`.trim()}
      data-fixed={headerActive} //add padding during modal active
    >
      <Container className={s.header_container}>
        <Logo className={s.header_logo} />
        <HeaderNav />
        <div className={s.header_actions}>
          <Lang />
          <button className={s.header_boxIcon}>
            <SeacrhIcon />
          </button>
          {user ? <HeaderAuthorizedAvatar /> : <HeaderUnauthorizedAvatar />}
        </div>
      </Container>
    </header>
  );
};
