import { FC } from 'react';
import Image from 'next/image';

import ArtboardBg from 'assets/images/backgrounds/artboard.png';

import s from './ArtboardBackground.module.scss';

interface ArtboardBackgroundProps {
  className?: string;
  size?: number;
}

export const ArtboardBackground: FC<ArtboardBackgroundProps> = ({
  className,
  size = 781,
}) => {
  return (
    <div
      className={`${s.artboardBackground} ${className ? className : ''}`.trim()}
    >
      <Image
        src={ArtboardBg}
        width={size}
        height={size}
        priority={true}
        alt="Background Top Users"
      />
    </div>
  );
};
