'use client';
import { CloseIcon } from 'components/icons/CloseIcon';
import { ReactNode, FC, useState, useEffect } from 'react';
import { default as ReactModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import s from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  wrapperClassName?: string;
  className?: string;
  isOpen: boolean;
  onCloseModal: () => void;
}

export const Modal = ({
  children,
  wrapperClassName,
  className,
  isOpen,
  onCloseModal,
}: IModalProps): JSX.Element => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen && scrollbarWidth) {
      const fixedElements: NodeListOf<HTMLElement> =
        document.querySelectorAll('[data-fixed]');
      fixedElements.forEach((element: HTMLElement) => {
        if (element.getAttribute('data-fixed') === 'true') {
          element.style.paddingRight = `${scrollbarWidth}px`;
        }
      });

      document.documentElement.classList.add('modal_open');
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      const fixedElements: NodeListOf<HTMLElement> =
        document.querySelectorAll('[data-fixed]');
      fixedElements.forEach((element: HTMLElement) => {
        if (element.getAttribute('data-fixed') === 'true') {
          element.style.removeProperty('padding-right');
        }
      });

      document.body.style.removeProperty('padding-right');
      document.documentElement.classList.remove('modal_open');
    };
  }, [isOpen]);

  const defaultClassNames = {
    modal: `${s.modal_default} ${
      wrapperClassName ? wrapperClassName : ''
    }`.trim(),
    closeButton: s.modal_close,
    overlay: s.modal_overlay,
  };

  const classNames = `${s.modal} ${className ? className : ''}`.trim();

  return (
    <ReactModal
      center
      classNames={defaultClassNames}
      closeIcon={<CloseIcon />}
      onClose={onCloseModal}
      open={isOpen}
    >
      <div className={classNames}>{children}</div>
    </ReactModal>
  );
};

interface IModalHeaderProps {
  align?: 'start' | 'center' | 'end';
  children?: ReactNode;
  className?: string;
}

const ModalHeader: FC<IModalHeaderProps> = ({ align, children, className }) => {
  const alignmentClass = align ? s[align] : '';
  const classNames = `${s.modal_header} ${alignmentClass} ${
    className ? className : ''
  }`.trim();

  return <div className={classNames}>{children}</div>;
};

Modal.Header = ModalHeader;

interface IModalContentProps {
  children?: ReactNode;
  className?: string;
}

const ModalContent: FC<IModalContentProps> = ({ children, className }) => {
  return (
    <div className={`${s.modal_content} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

Modal.Content = ModalContent;

interface IModalFooterProps {
  className?: string;
  children?: ReactNode;
}

const ModalFooter: FC<IModalFooterProps> = ({ children, className }) => {
  return (
    <div className={`${s.modal_footer} ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

Modal.Footer = ModalFooter;
