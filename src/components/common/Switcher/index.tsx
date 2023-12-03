'use client';
import { FC } from 'react';
import s from './Switcher.module.scss';

interface SwitcherProps {
  isActive?: boolean;
  onClick?: () => void;
  size?: 'middle';
}

export const Switcher: FC<SwitcherProps> = ({ isActive, onClick, size }) => {
  return (
    <button
      className={`${s.switcher} ${isActive ? s.active : ''} ${
        size ? s[size] : ''
      }`.trim()}
      onClick={onClick}
      type="button"
    >
      <span />
    </button>
  );
};
