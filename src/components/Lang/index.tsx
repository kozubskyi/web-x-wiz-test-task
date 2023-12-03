'use client';

import { FC, useState, useRef } from 'react';

import { useParams, useSearchParams } from 'next/navigation';
import { useRouter, usePathname } from 'next-intl/client';

import { defaultLocale, locales } from 'constants/locales';
import { EnumLanguage } from 'types/enums';

import { DropDown } from 'ui/components/DropDown';

import { ArrowBottom } from 'components/icons/ArrowIcons';

import s from './Lang.module.scss';

interface LangProps {
  className?: string;
}

export const Lang: FC<LangProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale } = useParams();

  const handleChangeLang = (cuurentLocale: EnumLanguage) => {
    defaultLocale.locale = cuurentLocale;
    router.push(`${pathname}?${searchParams}`, { locale: cuurentLocale });
    router.refresh();
  };

  // toogle drop down
  const [isOpen, setIsOpen] = useState(false);
  const ref_parent_dropDown = useRef<HTMLDivElement | null>(null);

  const handleClickLang = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${className ? className : ''} ${s.lang}`.trim()}
      ref={ref_parent_dropDown}
    >
      <button
        onClick={handleClickLang}
        className={`${s.lang_value} ${isOpen ? s.lang_valueActive : ''}`.trim()}
      >
        <span className="text_accent">{locale}</span>
        <ArrowBottom />
      </button>
      <DropDown
        isOpen={isOpen}
        parent={ref_parent_dropDown}
        onClickOutside={setIsOpen}
      >
        <div className={s.lang_wrapper}>
          <ul className={s.lang_list}>
            {locales.map((cuurentLocale) => (
              <li className={s.lang_item} key={cuurentLocale}>
                <button
                  onClick={() => handleChangeLang(cuurentLocale)}
                  className={`${s.lang_button} ${
                    cuurentLocale == locale ? s.lang_buttonActive : ''
                  }`.trim()}
                >
                  <span></span>
                  {cuurentLocale}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </DropDown>
    </div>
  );
};
