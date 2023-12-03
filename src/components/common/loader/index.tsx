import { FC } from 'react';
import { Portal } from 'ui/components/Portal';

import s from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <Portal>
      <div className={s.loader}>
        <div className={s.loader_body}>Loading...</div>
      </div>
    </Portal>
  );
};
