'use client';
import { FC } from 'react';
import Link from 'next/link';

import {
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from 'components/icons/social';
import { SocialLine } from './SocialLine';

import { LINKS } from 'constants/links';

import s from './Main.module.scss';

export const Socials: FC = () => {
  const socials = [
    {
      title: 'instagram',
      icon: <InstagramIcon />,
      href: LINKS.SOCIAL.INSTAGRAM,
    },
    { title: 'linkedin', icon: <LinkedinIcon />, href: LINKS.SOCIAL.LINKEDIN },
    { title: 'telegram', icon: <TelegramIcon />, href: LINKS.SOCIAL.TELEGRAM },
  ];

  const topLineClassNames = `${s.socials_line} ${s.socials_line_top}`;
  const bottomLineClassNames = `${s.socials_line} ${s.socials_line_bottom}`;

  return (
    <div className={s.socials}>
      <SocialLine className={topLineClassNames} />
      <ul className={s.socials_list}>
        {socials.map((social, index) => (
          <li className={s.socials_item} key={index}>
            <Link className={s.socials_link} href={social.href}>
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
      <SocialLine className={bottomLineClassNames} />
    </div>
  );
};
