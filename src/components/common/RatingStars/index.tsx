'use client';
import { StartIcon } from 'components/icons/StartIcon';
import { FC, useEffect, useState } from 'react';

import { Rating } from 'react-simple-star-rating';

export interface RatingStarsProps {
  className?: string; // Назва класів батьківського елементу
  count?: number; // Кількість загальних зірок
  value?: number; // Значення рейтингу
  color?: string; // Колір неактивних зірок (будь-який дійсний значення CSS)
  activeColor?: string; // Колір вибраних або активних зірок
  edit?: boolean; // Чи можна вибирати рейтинг (true або false)
  onChange?: (newRating: number) => void; // Функція, яка викликається при зміні рейтингу
}

export const RatingStars: FC<RatingStarsProps> = ({
  className,
  count = 5,
  value = 0,
  color = '#E9E7E9',
  activeColor = '#FF6C00',
  edit = false,
  onChange,
}) => {
  const [rating, setRating] = useState(value);
  const [fillStyle, setFillStyle] = useState({
    display: 'none',
  });

  useEffect(() => {
    setRating(value);
  }, [value]);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    onChange && onChange(newRating);
  };

  useEffect(() => {
    setFillStyle({
      display: 'inline-block',
    });
  }, []);

  const customIcons = Array.from({ length: count }, (_, index) => ({
    icon: <StartIcon />,
  }));

  return (
    <div className={className}>
      <Rating
        initialValue={rating}
        iconsCount={count}
        readonly={!edit}
        allowFraction={false}
        onClick={handleRating}
        customIcons={customIcons}
        fillColor={activeColor}
        fillStyle={fillStyle}
        emptyColor={color}
      />
    </div>
  );
};
