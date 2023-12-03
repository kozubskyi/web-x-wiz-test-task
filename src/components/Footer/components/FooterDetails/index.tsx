import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from 'components/common/logo';

import { LINKS } from 'constants/links';

import s from '../../Footer.module.scss';
import {
  InstagramIcon,
  TelegramIcon,
  LinkedinIcon,
} from 'components/icons/social';

export const FooterDetails: FC = () => {
  const t = useTranslations('Footer');

  const socials = [
    {
      title: 'instagram',
      icon: <InstagramIcon />,
      href: LINKS.SOCIAL.INSTAGRAM,
    },
    { title: 'linkedin', icon: <LinkedinIcon />, href: LINKS.SOCIAL.LINKEDIN },
    { title: 'telegram', icon: <TelegramIcon />, href: LINKS.SOCIAL.TELEGRAM },
  ];

  return (
    <div className={s.footer_details}>
      <Logo />
      <p className={s.footer_description}>{t('description')}</p>
      <ul className={s.footer_socials}>
        {socials.map((social, index) => (
          <li key={index}>
            <Link
              className={s.footer_social}
              href={social.href}
              target="_blank"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
