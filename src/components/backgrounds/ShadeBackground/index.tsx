import { FC } from 'react';
import Image from 'next/image';

import ShadeBg from 'assets/images/backgrounds/shade.png';

import s from './ShadeBackground.module.scss';

interface ShadeBackgroundProps {
  className?: string;
}

export const ShadeBackground: FC<ShadeBackgroundProps> = ({ className }) => {
  return (
    <div
      className={`${s.shadeBackground} ${className ? className : ''}`.trim()}
    >
      <Image
        src={ShadeBg}
        objectPosition="center"
        layout="fill"
        priority={true}
        alt="Background Shell"
      />
    </div>
  );
};
