'use client';
import { ReactNode } from 'react';
import { Accordion } from '@szhsin/react-accordion';

interface AccordionProps {
  allowMultiple?: boolean;
  className?: string;
  children?: ReactNode;
}

export const AccordionGroup = ({
  allowMultiple,
  className,
  children,
}: AccordionProps): JSX.Element => {
  return (
    <Accordion
      allowMultiple={allowMultiple}
      className={className}
      mountOnEnter
      unmountOnExit
      transition
      transitionTimeout={200}
    >
      {children}
    </Accordion>
  );
};
