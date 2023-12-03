'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { ChangePasswordForm } from './ChangePasswordForm';
import { Switcher } from 'components/common/Switcher';

import s from './Security.module.scss';
import { Section } from 'components/common/profile/Section';

interface SecurityProps {
  isTwoFactorEnabled?: boolean;
}

export const Security: FC<SecurityProps> = ({ isTwoFactorEnabled }) => {
  const t = useTranslations('ProfilePage.Security');
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeUserTwoFA = () => {
    if (isTwoFactorEnabled) {
      alert('Alredy enabled');
      return;
    }

    setIsOpen(true);
  };

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <ChangePasswordForm />
        <div className={s.twofa}>
          <div>
            <span className={s.twofa_title}>{t('2fa_tittle')}</span>
            <p className={s.twofa_subtitle}>{t('2fa_subtittle')}</p>
          </div>
          <Switcher
            isActive={isTwoFactorEnabled}
            onClick={handleChangeUserTwoFA}
            size="middle"
          />
        </div>
      </Section.Body>
    </Section>
  );
};
