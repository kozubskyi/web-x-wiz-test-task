'use client';
import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import { motion, useAnimation, useInView } from 'framer-motion';

import CheckMarkIcon from 'assets/images/icons/check-mark-blue.svg';

import s from './List.module.scss';
import { animationService } from 'utils/services/animation-service';

interface ListProps {
  items: string[];
  className?: string;
}

export const List: FC<ListProps> = ({ items, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <ul className={`${s.list} ${className ? className : ''}`.trim()} ref={ref}>
      {items.map((item, index) => (
        <motion.li
          {...animationService.slideRight({ index, controls: mainControls })}
          className={s.item}
          key={index}
        >
          <Image src={CheckMarkIcon} width={24} height={24} alt="Check Mark" />
          <span className={s.item_title}>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
};
