'use client';
import { FC } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import './ChoosePhone.scss';

interface ChoosePhoneProps {
  name: string;
  label: string;
  phone: string | null;
  onChange: (phone: string) => void;
  error?: boolean;
}

export const ChoosePhone: FC<ChoosePhoneProps> = ({
  error,
  phone,
  onChange,
  name,
  label,
}) => {
  return (
    <div className={`phoneBox ${error ? 'phoneBox_invalid' : ''}`.trim()}>
      <label className={'phoneBox_label'} htmlFor={name}>
        {label}
      </label>
      <div className={'phoneBox_wrapper'}>
        <PhoneInput
          country="us"
          value={phone}
          containerClass="phoneBox_cont"
          inputClass={'phoneBox_input'}
          buttonClass={'phoneBox_button'}
          dropdownClass={'phoneBox_dropdown'}
          inputProps={{ name }}
          onChange={(phone) => onChange(phone)}
        />
      </div>
    </div>
  );
};
