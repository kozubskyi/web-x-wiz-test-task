'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const [container] = useState(() =>
    isClient ? document?.createElement('div') : null
  );

  useEffect(() => {
    if (!isClient || !container) return;

    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  if (!isClient || !container) {
    return <>{children}</>;
  }

  return ReactDOM.createPortal(children, container);
};
