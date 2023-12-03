'use client';
import { ArrowBottom } from 'components/icons/ArrowIcons';
import { FC, ReactNode, useRef, useState } from 'react';
import { SecondaryDropDown } from 'ui/components/DropDown';

import s from './DropdownField.module.scss';

interface DropdownFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  errors?: any;
  type?: 'text' | 'number';
  register: any;
  children: ReactNode;
}

export const DropdownField: FC<DropdownFieldProps> = ({
  errors,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  register,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const handleToggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${s.dropdownField} ${
        errors[name] ? s.dropdownField_invalid : ''
      }`.trim()}
    >
      {label && (
        <label className={s.dropdownField_label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={s.dropdownField_wrapper} ref={parentRef}>
        <button
          className={`${s.dropdownField_button} ${
            isOpen ? s.active : ''
          }`.trim()}
          onClick={handleToggleDropdown}
          type="button"
        >
          <input
            {...register(name, {
              required: true,
              value: value || '',
            })}
            type={type}
            name={name}
            placeholder={placeholder}
            className={s.dropdownField_input}
          />
          <ArrowBottom />
        </button>
        <SecondaryDropDown
          parent={parentRef}
          isOpen={isOpen}
          onClickOutside={setIsOpen}
        >
          {children}
        </SecondaryDropDown>
      </div>
    </div>
  );
};
