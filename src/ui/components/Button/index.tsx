import Link from 'next/link';
import React, { FC, ReactNode, MouseEvent } from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  className?: string;
}

interface ILinkButton {
  className?: string;
  children: ReactNode;
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  target?: '_blunk' | '_self';
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className,
}) => {
  const buttonClass = `${s.button} ${className ? className : ''}`.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick ? onClick : undefined}
      type={type}
    >
      {children}
    </button>
  );
};

export const SecondaryButton: FC<ButtonProps> = ({
  children,
  onClick,
  type,
  className,
}) => {
  const buttonClass = `${className || ''} ${s.button_secondary}`;

  return (
    <Button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export const MinorButton: FC<ButtonProps> = ({
  children,
  onClick,
  type,
  className,
}) => {
  const buttonClass = `${className || ''} ${s.button_minor}`;

  return (
    <Button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export const RedButton: FC<ButtonProps> = ({
  children,
  onClick,
  type,
  className,
}) => {
  const buttonClass = `${className || ''} ${s.button_red}`;

  return (
    <Button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export const LinkButton: FC<ILinkButton> = ({
  className,
  children,
  href,
  target = '_self',
  onClick,
}) => {
  const buttonClass = `${s.button} ${className ? className : ''}`.trim();

  return (
    <Link className={buttonClass} onClick={onClick} href={href} target={target}>
      {children}
    </Link>
  );
};

export const SecondaryLinkButton: FC<ILinkButton> = ({
  className,
  children,
  href,
  target,
  onClick,
}) => {
  const buttonClass = `${className || ''} ${s.button_secondary}`;

  return (
    <LinkButton
      href={href}
      className={buttonClass}
      onClick={onClick}
      target={target}
    >
      {children}
    </LinkButton>
  );
};

export const MinorLinkButton: FC<ILinkButton> = ({
  className,
  children,
  href,
  target,
  onClick,
}) => {
  const buttonClass = `${className || ''} ${s.button_minor}`;

  return (
    <LinkButton
      href={href}
      className={buttonClass}
      onClick={onClick}
      target={target}
    >
      {children}
    </LinkButton>
  );
};
