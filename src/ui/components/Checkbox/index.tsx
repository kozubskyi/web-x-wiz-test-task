'use client';
import { FC, useEffect, useState } from 'react';

import { CheckmarkIcon } from 'components/icons/CheckmarkIcon';

import s from './Checkbox.module.scss';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  error?: boolean;
  className?: string;
  autoCheked?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
  className,
  autoCheked = true,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    autoCheked && setIsChecked(newCheckedValue);
    onChange && onChange(newCheckedValue);
  };

  useEffect(() => {
    if (!autoCheked) {
      setIsChecked(checked);
    }
  }, [checked]);

  return (
    <label
      className={`${s.checkbox} ${error ? s.checkbox_invalid : ''} ${
        className ? className : ''
      }`.trim()}
      onClick={handleCheckboxChange}
    >
      <div className={s.checkbox_background}>
        {isChecked && <CheckmarkIcon />}
      </div>
      {label && <span className={s.checkbox_label}>{label}</span>}
    </label>
  );
};

export const FullCheckbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
  className,
  autoCheked,
}) => {
  return (
    <Checkbox
      checked={checked}
      label={label}
      onChange={onChange}
      autoCheked={autoCheked}
      error={error}
      className={`${checked ? s.checkbox_full : ''} ${
        className ? className : ''
      }`}
    />
  );
};
