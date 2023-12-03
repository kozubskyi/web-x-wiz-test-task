import { EyeIcon } from 'components/icons/EyeIcon';
import { useTranslations } from 'next-intl';
import { FC, ReactNode, useState } from 'react';

import s from './FieldBox.module.scss';

interface FieldBoxProps {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  icon?: ReactNode;
  errors: any;
  register: any;
  select?: ReactNode;
  value?: string | number;
}

export const FieldBox: FC<FieldBoxProps> = ({
  name = '',
  label,
  placeholder = '',
  autoComplete,
  className,
  type = 'text',
  icon,
  errors,
  register,
  select,
  value,
}) => {
  if (select) {
    return <>{select}</>;
  }

  const t = useTranslations('Validation');
  const [isShow, setIsShow] = useState(false);
  const isPassword = type === 'password';

  const handleToogleShowPassword = () => setIsShow(!isShow);

  const classNames = `${s.fieldBox} ${className ? className : ''} ${
    errors[name] ? s.fieldBox_invalid : ''
  }`.trim();

  return (
    <div className={classNames}>
      <label className={s.fieldBox_label} htmlFor={name}>
        {label}
      </label>
      <div
        className={`${s.fieldBox_wrapper} ${
          isPassword ? s.fieldBox_wrapper_password : ''
        } ${!icon ? s.noicon : ''}`.trim()}
      >
        {icon && <i className={s.fieldBox_icon}>{icon}</i>}
        <input
          {...register(name, {
            required: true,
            value: value || '',
          })}
          className={s.fieldBox_input}
          placeholder={placeholder}
          type={isShow ? 'text' : type}
          autoComplete={autoComplete}
        />
        {isPassword && (
          <button
            className={`${s.fieldBox_show} ${
              isShow ? s.fieldBox_show_active : ''
            }`.trim()}
            onClick={handleToogleShowPassword}
            type="button"
          >
            <EyeIcon />
          </button>
        )}
      </div>
      {errors[name]?.message.trim() && (
        <p className={s.fieldBox_message}>{t(errors[name].message)}</p>
      )}
    </div>
  );
};
