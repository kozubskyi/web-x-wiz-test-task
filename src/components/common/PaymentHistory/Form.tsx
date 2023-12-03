'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import { userShema } from 'utils/schemes/user-shema';

import { SeachForm } from '../forms/SeacrhForm';

export interface IPaymentForm {
  transaction_code?: string;
  date_from?: string;
  date_to?: string;
}

interface SeachFormProps {
  onSearch: ({ transaction_code }: IPaymentForm) => void;
}

export const Form: FC<SeachFormProps> = ({ onSearch }) => {
  const t = useTranslations('ProfilePage.Payment');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPaymentForm>({
    resolver: yupResolver(userShema.paymentSearch),
  });

  const search = {
    label: t('search_label'),
    placeholder: t('search_placeholder'),
    name: 'transaction_code',
  };

  const fields = {
    label: t('date_label'),
    items: [
      {
        name: 'date_from',
        placeholder: t('date_from'),
      },
      { name: 'date_to', placeholder: t('date_to') },
    ],
  };

  return (
    <SeachForm
      fields={fields}
      search={search}
      onSearch={onSearch}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
    />
  );
};
