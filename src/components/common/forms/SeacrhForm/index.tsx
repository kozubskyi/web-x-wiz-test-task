'use client';
import { FC } from 'react';
import { FilterIcon } from 'components/icons/FilterIcon';
import { SeacrhIcon } from 'components/icons/social/SeacrhIcon';
import { DropdownField } from 'components/common/DropdownField';
import { MinorButton, SecondaryButton } from 'ui/components/Button';

import s from './SeachForm.module.scss';

interface IItem {
  name: string;
  placeholder?: string;
}

interface SeachFormProps {
  search: {
    label: string;
    name: string;
    placeholder?: string;
  };
  fields: {
    label: string;
    items: IItem[];
  };
  withoutFilter?: boolean;
  onSearch: (formData: any) => void;
  register: any;
  errors: any;
  handleSubmit: any;
}

export const SeachForm: FC<SeachFormProps> = ({
  onSearch,
  withoutFilter,
  register,
  errors,
  search,
  fields,
  handleSubmit,
}) => {
  return (
    <form
      className={[s.form, withoutFilter ? s.form_noFilter : ''].join(' ')}
      onSubmit={handleSubmit(onSearch)}
    >
      <div className={s.form_code}>
        <label className={s.form_label} htmlFor={search.name}>
          {search.label}
        </label>
        <div className={s.form_input}>
          <input {...register(search.name)} placeholder={search.placeholder} />
        </div>
      </div>
      <div className={s.form_date}>
        <label className={s.form_label} htmlFor="transaction_code">
          {fields.label}
        </label>
        <div className={s.form_date_fields}>
          {fields.items.map((field, index) => {
            return (
              <DropdownField
                register={register}
                errors={errors}
                name={field.name}
                placeholder={field.placeholder}
                key={index}
              >
                design
              </DropdownField>
            );
          })}
        </div>
      </div>
      {!withoutFilter && (
        <SecondaryButton className={`${s.form_button} ${s.form_filter}`}>
          <FilterIcon />
        </SecondaryButton>
      )}
      <MinorButton className={s.form_button} type="submit">
        <SeacrhIcon />
      </MinorButton>
    </form>
  );
};
