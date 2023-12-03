import { FC } from 'react';
import Image from 'next/image';

import ShadeBg from 'assets/images/backgrounds/small-shade.png';

import s from './SmallShadeBackground.module.scss';

interface SmallShadeBackgroundProps {
  className?: string;
}

export const SmallShadeBackground: FC<SmallShadeBackgroundProps> = ({
  className,
}) => {
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
