'use client';
import { FC, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { IAchievement } from 'types/userTypes';
import { useDarkTheme } from 'utils/hooks/useDarkTheme';

import { DropDown } from 'ui/components/DropDown';
import { HexagonStarIcon } from 'components/icons/HexagonStarIcon';

import BorderHexagon from 'assets/images/hexagon/border-hexagon.png';
import DarkBorderHexagon from 'assets/images/hexagon/dark-border-hexagon.png';
import PartHexagon from 'assets/images/hexagon/part-hexagon.png';
import WhitePartHexagon from 'assets/images/hexagon/white-part-hexagon.png';
import Hexagon from 'assets/images/hexagon/hexagon.png';
import DarkHexagon from 'assets/images/hexagon/dark-hexagon.png';
import AccentHexagon from 'assets/images/hexagon/accent-hexagon.png';

import s from './Achievements.module.scss';
import { TooltipDropdown } from '../Tooltip';

interface AchievementsProps {
  achievements: IAchievement[];
}

export const Achievements: FC<AchievementsProps> = ({ achievements }) => {
  return (
    <ul className={s.achievements}>
      {achievements.map((achievement) => (
        <Achievement achievement={achievement} />
      ))}
    </ul>
  );
};

interface AchievementProps {
  achievement: IAchievement;
}

export const Achievement: FC<AchievementProps> = ({ achievement }) => {
  const t = useTranslations('Achievements');
  const { isDark } = useDarkTheme();

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLLIElement | null>(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <li
      className={s.achievement}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={parentRef}
      key={achievement.id}
    >
      <div className={s.achievement_wrapper}>
        <div className={s.hexagon}>
          <div className={s.hexagon_wrapper}>
            <Image
              src={isDark ? DarkBorderHexagon : BorderHexagon}
              width={104}
              height={120}
              alt="Border Hexagon"
              className={s.hexagon_border}
            />
            <div className={`${s.hexagon_part} ${s.hexagon_part_top_right}`}>
              <Image
                src={isDark ? WhitePartHexagon : PartHexagon}
                width={47}
                height={33}
                alt="Part Of Hexagon"
              />
            </div>
          </div>
          <div className={s.hexagon_inner}>
            <Image
              src={isDark ? DarkHexagon : Hexagon}
              layout="fill"
              alt="Hexagon"
            />
            <HexagonStarIcon />
          </div>
        </div>
        <div className={s.achievement_footer}>
          <span className={s.achievement_name}>{achievement.name}</span>
        </div>
      </div>
      <TooltipDropdown isOpen={isOpen} parentRef={parentRef}>
        <p>{achievement.description}</p>
        <div className={s.tooltip_count}>
          <span>
            0 {t('of')} {achievement.criteria.length}
          </span>
        </div>
      </TooltipDropdown>
    </li>
  );
};
