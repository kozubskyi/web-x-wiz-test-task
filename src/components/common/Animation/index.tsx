'use client';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import s from './Animation.module.scss';

interface AnimationProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
}

export const Animation: FC<AnimationProps> = ({
  children,
  className,
  center,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  const classNames = `${className ? className : ''} ${
    center ? s.animation_center : ''
  } ${s.animation}`.trim();

  return (
    <div ref={ref} className={classNames}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className={s.animation_slide}
      />
    </div>
  );
};
