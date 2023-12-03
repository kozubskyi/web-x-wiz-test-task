'use client';
import { FC } from 'react';

import s from './Steps.module.scss';

export interface IStep {
  id: string | number;
  title: string;
  isCompleted?: boolean;
  isActive?: boolean;
}

interface StepsProps {
  steps: IStep[];
}

export const Steps: FC<StepsProps> = ({ steps }) => {
  return (
    <div>
      <ul className={s.steps}>
        {steps.map((step, index) => {
          const isActive = step.isCompleted || step.isActive;
          const isFirst = index === 0;

          return (
            <li
              className={`${s.step} ${isFirst ? s.first : ''} ${
                isActive ? s.active : ''
              }`.trim()}
              key={step.id}
            >
              <div className={s.step_path}>
                {!isFirst && <span className={s.step_line} />}
                <div className={s.step_block}>
                  <span className={s.step_title}>{step.title}</span>
                  <span className={s.step_circle} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
