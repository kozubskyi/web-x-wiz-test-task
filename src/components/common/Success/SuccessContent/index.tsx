import { FC } from 'react';
import Image from 'next/image';

import { Button, LinkButton, SecondaryButton } from 'ui/components/Button';
import SuccessIcon from 'assets/images/icons/success.svg';

import s from './SuccessContent.module.scss';

interface SuccessContentProps {
  title: string;
  subtitle: string;
  href?: string;
  linkText: string;
  onClick?: () => void;
  className?: string;
}

export const SuccessContent: FC<SuccessContentProps> = ({
  title,
  subtitle,
  href,
  linkText,
  onClick,
  className,
}) => {
  return (
    <div className={`${s.success} ${className ? className : ''}`.trim()}>
      <Image src={SuccessIcon} width={100} height={100} alt="success" />
      <span className={`${s.success_title}`}>{title}</span>
      <p className={s.success_subtitle}>{subtitle}</p>
      {href && (
        <LinkButton href={href} className={s.success_btn}>
          {linkText}
        </LinkButton>
      )}
      {onClick && (
        <SecondaryButton className={s.success_btn} onClick={onClick}>
          {linkText}
        </SecondaryButton>
      )}
    </div>
  );
};
