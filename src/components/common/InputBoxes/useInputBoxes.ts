'use client';
import { useState } from 'react';

export const useInputBoxes = (length: number) => {
  const [inputValues, setInputValues] = useState<string[]>(
    Array.from({ length }, () => '')
  );
  const [errorIndices, setErrorIndices] = useState<number[] | null>(null);
  const code = inputValues.join('');

  const setValues = (values: string[]) => {
    setInputValues(values);
  };

  const resetValues = () => {
    setInputValues(Array.from({ length }, () => ''));
    setErrorIndices(null);
  };

  const getErrors = () => {
    let errors = [];
    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i] === '') {
        errors.push(i);
      }
    }
    setErrorIndices(errors);

    return errors;
  };

  return {
    inputValues,
    errorIndices,
    setValues,
    resetValues,
    getErrors,
    code,
  };
};
