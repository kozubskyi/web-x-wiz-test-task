'use client';
import React, { useState, useEffect, useRef, FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import ErrorImg from 'assets/images/icons/error.svg';
import SuccessImg from 'assets/images/icons/white-success.svg';

import s from './Messages.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Portal } from 'ui/components/Portal';

interface MessageProps {
  type: 'success' | 'error' | 'warning';
  text: string;
  title?: string;
  duration?: number;
  icon: StaticImport;
}

interface CustomMessageProps {
  title?: string;
  text?: string;
  duration?: number;
}

export const Message: FC<MessageProps> = ({
  type,
  text,
  title,
  icon,
  duration = 5000,
}) => {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  let timer: NodeJS.Timeout | null = null;
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    setVisible(true);

    timer = setTimeout(() => {
      if (!isMouseOver) {
        setVisible(false);
      }
    }, duration);

    return () => {
      timer && clearTimeout(timer);
    };
  }, [duration, isMouseOver]);

  const handleClickOutsideMessage = (e: MouseEvent) => {
    if (!nodeRef?.current?.contains(e.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutsideMessage);
    return () => window.removeEventListener('click', handleClickOutsideMessage);
  }, []);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const transitionClasses = {
    enter: s.message_enter,
    enterActive: s.message_enterActive,
    exit: s.message_exit,
    exitActive: s.message_exitActive,
  };

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      classNames={transitionClasses}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <Portal>
        <div
          className={`${s.message} ${s['message_' + type]}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={nodeRef}
        >
          <div className={s.message_top}>
            <Image src={icon} width={20} height={20} alt="error" />
            <span>{title}</span>
          </div>
          <div className={s.message_body}>{text}</div>
        </div>
      </Portal>
    </CSSTransition>
  );
};

export const ErrorMessage: FC<CustomMessageProps> = ({
  text = '',
  duration,
  title,
}) => {
  const t = useTranslations('Messages');
  return (
    <Message
      title={title ? title : t('Error.something_wrong')}
      type="error"
      icon={ErrorImg}
      text={text}
      duration={duration}
    />
  );
};

export const SuccessMessage: FC<CustomMessageProps> = ({
  text = '',
  duration,
  title,
}) => {
  const t = useTranslations('Messages');
  return (
    <Message
      title={title ? title : t('Success.resend_link')}
      type="success"
      icon={SuccessImg}
      text={text}
      duration={duration}
    />
  );
};
