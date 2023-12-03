'use client';
import { FC, ReactNode, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import s from './Tabs.module.scss';

interface ITab {
  name: string;
  filter: string;
  icon?: ReactNode;
}

interface ITabsProps {
  tabs: ITab[];
  filterName?: string;
}

export const Tabs: FC<ITabsProps> = ({ tabs, filterName = 'tab' }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTab = searchParams.get(filterName);
  const activeTab = tabs.find((tab) => tab.filter === searchTab)
    ? searchTab
    : tabs[0].filter;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <ul className={s.tabs}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.filter;

        return (
          <li className={s.tab} key={index}>
            <Link
              href={`${pathname}?${createQueryString(filterName, tab.filter)}`}
              className={`${s.tab_filter} ${isActive ? s.active : ''}`}
            >
              {tab.icon && <>{tab.icon}</>}
              {tab.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
