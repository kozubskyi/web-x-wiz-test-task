import { FC, ReactNode } from 'react';
import { SecondaryButton, SecondaryLinkButton } from 'ui/components/Button';
import { ArrowRight } from 'components/icons/ArrowIcons';
import { TrashIcon } from 'components/icons/TrashIcon';

import s from './Table.module.scss';

interface TableButtonProps {
  className?: string;
  href: string;
}

export const TableButton: FC<TableButtonProps> = ({ className, href }) => {
  return (
    <SecondaryLinkButton
      className={`${s.table_button} ${className ? className : ''}`}
      href={href}
    >
      <ArrowRight />
    </SecondaryLinkButton>
  );
};

interface TableDeleteButtonProps {
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export const TableDeleteButton: FC<TableDeleteButtonProps> = ({
  className,
  onClick,
  icon,
}) => {
  return (
    <SecondaryButton
      className={`${s.table_button} ${className ? className : ''}`}
      onClick={onClick}
    >
      {icon ? icon : <TrashIcon />}
    </SecondaryButton>
  );
};
