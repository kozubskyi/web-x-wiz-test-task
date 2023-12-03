import { FC, ReactNode } from 'react';
import Link from 'next/link';

import s from '../../Footer.module.scss';

export interface IFooterItems {
  title: string;
  href: string;
  icon?: ReactNode;
  target?: '_self' | '_blunk';
}

interface FooterColumnProps {
  title: string;
  items: IFooterItems[];
}

export const FooterColumn: FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className={s.column}>
      <span className={s.column_title}>{title}</span>
      <ul className={s.column_items}>
        {items.map((item, index) => (
          <li className={s.column_item} key={index}>
            <Link
              className={`${s.column_link} ${item.icon ? s.icon : ''}`.trim()}
              href={item.href}
              target={item.target}
            >
              {item.icon && <i>{item.icon}</i>}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
