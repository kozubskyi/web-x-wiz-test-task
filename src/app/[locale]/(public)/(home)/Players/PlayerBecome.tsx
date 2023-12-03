'use client';
import { FC, ReactNode, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

import { PlayerSection } from 'components/common/PlayerSection';
import { LinkButton } from 'ui/components/Button';
import ArrowRight from 'assets/images/icons/arrows/arrow-right.svg';
import { animationService } from 'utils/services/animation-service';

import s from '../Home.module.scss';

interface HomePlayerBecomeItems {
  icon: StaticImageData;
  title: string;
}

interface HomePlayerBecomeProps {
  videoId: string;
  title: string;
  title_accent?: ReactNode;
  subtitle: string;
  mirror?: boolean;
  items: HomePlayerBecomeItems[];
  href: string;
  btn_text: string;
}

export const PlayerBecome: FC<HomePlayerBecomeProps> = ({
  videoId,
  title,
  title_accent,
  subtitle,
  mirror,
  items,
  href,
  btn_text,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <PlayerSection
      videoId={videoId}
      title={title}
      title_accent={title_accent}
      subtitle={subtitle}
      mirror={mirror}
    >
      <ul className={s.become_list} ref={ref}>
        {items.map((item, index) => (
          <motion.li
            {...animationService.slideRight({ index, controls: mainControls })}
            className={s.item}
            key={index}
          >
            <div className={s.item_content}>
              <div className={s.item_image}>
                <Image
                  src={item.icon}
                  width={24}
                  height={24}
                  alt={item.title}
                />
              </div>
              <span className={s.item_title}>{item.title}</span>
            </div>

            {index !== items.length - 1 && (
              <Image
                src={ArrowRight}
                width={24}
                height={24}
                alt="arrow right"
                className={s.item_arrow}
              />
            )}
          </motion.li>
        ))}
      </ul>
      <LinkButton className={s.become} href={href}>
        {btn_text}
      </LinkButton>
    </PlayerSection>
  );
};
