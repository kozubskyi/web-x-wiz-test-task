'use client';
import { FC, ReactNode, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowBottom } from 'components/icons/ArrowIcons';
import { SecondaryButton } from 'ui/components/Button';
import { SecondaryDropDown } from 'ui/components/DropDown';

import s from './ChartHeader.module.scss';

interface IChartFilter {
  filter: string;
  text: string;
}

interface ChartHeaderProps {
  title: ReactNode;
  activeFilter?: string;
  filterList?: IChartFilter[];
  onChangeFilter?: (newFilter: string) => void;
}

export const ChartHeader: FC<ChartHeaderProps> = ({
  title,
  activeFilter,
  filterList,
  onChangeFilter,
}) => {
  const t = useTranslations('Charts.Filters');
  const filters = [
    { filter: 'monthly', text: t('monthly') },
    { filter: 'daily', text: t('daily') },
  ];
  const currentFilters = filterList || filters;
  const [active, setActive] = useState(activeFilter || currentFilters[0].text);
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef(null);

  const handleChangeFilter = (newFilter: IChartFilter) => {
    setIsOpen(false);
    setActive(newFilter.text);
    onChangeFilter && onChangeFilter(newFilter.filter);
  };

  return (
    <div className={s.header}>
      {title}
      <div className={s.header_filters} ref={parentRef}>
        <SecondaryButton
          className={`${s.header_filter} ${isOpen ? s.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {active}
          <ArrowBottom />
        </SecondaryButton>
        <SecondaryDropDown
          isOpen={isOpen}
          parent={parentRef}
          onClickOutside={() => setIsOpen(false)}
        >
          <ul>
            <li>!!! need design</li>
            {currentFilters.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleChangeFilter(item)} type="button">
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </SecondaryDropDown>
      </div>
    </div>
  );
};
