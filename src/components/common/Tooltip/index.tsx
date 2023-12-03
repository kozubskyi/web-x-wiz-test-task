import { FC, MutableRefObject, ReactNode } from 'react';
import { DropDown } from 'ui/components/DropDown';

import s from './TooltipDropdown.module.scss';

interface TooltipDropdownProps {
  isOpen?: boolean;
  parentRef?: MutableRefObject<HTMLDivElement | HTMLLIElement | null>;
  children?: ReactNode;
}

export const TooltipDropdown: FC<TooltipDropdownProps> = ({
  isOpen,
  parentRef,
  children,
}) => {
  return (
    <DropDown
      className={s.tooltip}
      contentClassName={s.tooltip_content}
      isOpen={isOpen}
      parent={parentRef}
    >
      <div className={s.tooltip_wrapper}>
        <div className={s.tooltip_wrapper_triangle}>
          <span />
        </div>
        <div className={s.tooltip_inner}>{children}</div>
      </div>
    </DropDown>
  );
};
