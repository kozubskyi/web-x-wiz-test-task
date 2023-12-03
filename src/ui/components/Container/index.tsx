import { FC, ReactNode } from 'react';

import s from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${className ? className : ''} ${s.container}`.trim()}>
      {children}
    </div>
  );
};
