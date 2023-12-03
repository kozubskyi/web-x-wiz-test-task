import { FC, useEffect, useState } from 'react';
import { SecondaryButton } from 'ui/components/Button';

import s from './Timer.module.scss';

interface TimerProps {
  className?: string;
  text: string;
  buttonText: string;
  initialDuration?: number;
  onClick: () => void;
}

export const Timer: FC<TimerProps> = ({
  className,
  text,
  buttonText,
  initialDuration = 59,
  onClick,
}) => {
  const [duration, setDuration] = useState(initialDuration);
  const [showResendButton, setShowResendButton] = useState(false);
  const minutes = String(Math.floor(duration / 60)).padStart(2, '0');
  const seconds = String(duration % 60).padStart(2, '0');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!showResendButton) {
      timer = setInterval(() => {
        setDuration((prevDuration) => {
          if (prevDuration === 0) {
            setShowResendButton(true);
            clearInterval(timer);
            return 0;
          }
          return prevDuration - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [showResendButton]);

  const handleClickButton = async () => {
    setDuration(initialDuration);
    setShowResendButton(false);
    onClick();
  };

  const classNames = `${className ? className : ''} ${s.timer}`.trim();

  return (
    <div className={classNames}>
      {showResendButton ? (
        <SecondaryButton onClick={handleClickButton}>
          {buttonText}
        </SecondaryButton>
      ) : (
        <p>
          <span>{text}</span>
          {`${minutes}:${seconds}`}
        </p>
      )}
    </div>
  );
};
