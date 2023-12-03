'use client';
import { useState } from 'react';
import { generateRandomString } from 'utils/utils';
import { IStep } from 'components/common/Steps';

interface ICurrentStep {
  title: string;
  isCompleted?: boolean;
  isActive?: boolean;
}

export const useSteps = (steps: ICurrentStep[]) => {
  const [currentSteps, setSteps] = useState<IStep[]>(
    steps.map((step, index) => {
      const isFirst = index === 0;

      return {
        id: generateRandomString(),
        title: step.title,
        isCompleted: step.isCompleted || isFirst,
        isActive: step.isActive || isFirst,
      };
    })
  );

  const stepIndex = currentSteps.findIndex((step) => step.isActive);

  const chageSteps = (newSteps: IStep[]) => setSteps(newSteps);

  const resetSteps = () => {
    setSteps(
      currentSteps.map((step, index) => {
        const isFirst = index === 0;

        return {
          ...step,
          isCompleted: isFirst,
          isActive: isFirst,
        };
      })
    );
  };

  const nextStep = () => {
    const currentStepIndex = currentSteps.findIndex((step) => step.isActive);

    if (currentStepIndex < currentSteps.length - 1) {
      const newSteps = currentSteps.map((step, index) => {
        switch (index) {
          case currentStepIndex:
            return { ...step, isCompleted: true, isActive: false };
          case currentStepIndex + 1:
            return { ...step, isActive: true };
          default:
            return step;
        }
      });

      setSteps(newSteps);
    }
  };

  const prevStep = () => {
    const currentStepIndex = currentSteps.findIndex((step) => step.isActive);

    if (currentStepIndex > 0) {
      const newSteps = currentSteps.map((step, index) => ({
        ...step,
        isCompleted: index < currentStepIndex,
        isActive: index === currentStepIndex - 1,
      }));

      setSteps(newSteps);
    }
  };

  return {
    steps: currentSteps,
    stepIndex,
    chageSteps,
    resetSteps,
    nextStep,
    prevStep,
  };
};
