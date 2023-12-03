import { ArrowBottom } from 'components/icons/ArrowIcons';
import { FC } from 'react';

import s from './SeeMore.module.scss';

interface SeeMoreProps {
  onClick?: () => void;
  className?: string;
  text: string;
}

export const SeeMore: FC<SeeMoreProps> = ({ className, text, onClick }) => {
  return (
    <div className={`${s.more} ${className ? className : ''}`.trim()}>
      <button className={s.more_btn} onClick={onClick} type="button">
        <span className="text_accent">{text}</span>
        <ArrowBottom />
      </button>
    </div>
  );
};
