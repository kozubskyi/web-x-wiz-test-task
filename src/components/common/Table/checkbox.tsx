'use client';
import { CheckmarkIcon } from 'components/icons/CheckmarkIcon';
import React, {
  forwardRef,
  useEffect,
  InputHTMLAttributes,
  RefObject,
  useRef,
} from 'react';

import s from './Table.module.scss';

interface TableCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

export const TableCheckbox = forwardRef<HTMLInputElement, TableCheckboxProps>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref as RefObject<HTMLInputElement>) || defaultRef;

    useEffect(() => {
      if (resolvedRef?.current) {
        resolvedRef.current.indeterminate = !!indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <label className={s.checkbox}>
        <input type="checkbox" ref={resolvedRef} {...rest} />
        <span className={s.checkbox_background}>
          {rest.checked && <CheckmarkIcon />}
        </span>
      </label>
    );
  }
);
