import React, { FC, ChangeEvent, useRef, KeyboardEvent } from 'react';

import s from './InputBoxes.module.scss';

type InputBoxesProps = {
  inputValues: string[];
  errorIndices: number[] | null;
  onChange: (value: string[]) => void;
  wrapperClassName?: string;
  className?: string;
};

export const InputBoxes: FC<InputBoxesProps> = ({
  inputValues,
  errorIndices,
  onChange,
  wrapperClassName,
  className,
}) => {
  const inputRefs = inputValues.map(() => useRef<HTMLInputElement>(null));

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;

      onChange(newInputValues);

      if (index < inputValues.length - 1 && value.length === 1) {
        inputRefs[index + 1].current?.focus();
      }

      const parentElement = e.target.parentElement;
      if (!parentElement) return;

      if (!value) {
        parentElement.classList.add(s.error);
        parentElement.classList.remove(s.success);
      } else {
        parentElement.classList.add(s.success);
        parentElement.classList.remove(s.error);
      }
    } else {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && index > 0 && inputValues[index].length === 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <div
      className={`${s.InputBoxes} ${
        wrapperClassName ? wrapperClassName : ''
      }`.trim()}
    >
      {inputValues.map((value, index) => (
        <div
          className={`${s.inputBox}  ${
            errorIndices
              ? errorIndices.includes(index)
                ? s.error
                : s.success
              : ''
          } ${className ? className : ''}`.trim()}
          key={index}
        >
          <input
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={inputRefs[index]}
          />
          {index !== inputValues.length - 1 && <span></span>}
        </div>
      ))}
    </div>
  );
};
