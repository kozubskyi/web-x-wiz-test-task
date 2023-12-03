'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { SecondaryButton } from 'ui/components/Button';
import { ArrowLeft } from 'components/icons/ArrowIcons';

import s from './BackButton.module.scss';

export const BackButton: FC = () => {
  const router = useRouter();

  return (
    <SecondaryButton className={s.back} onClick={() => router.back()}>
      <ArrowLeft />
    </SecondaryButton>
  );
};
