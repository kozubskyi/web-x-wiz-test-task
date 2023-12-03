import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import s from './Cards.module.scss';

interface ICard {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

interface CardsProps {
  cards: ICard[];
  className?: string;
}

export const Cards: FC<CardsProps> = ({ cards, className }) => {
  return (
    <ul className={`${s.cards} ${className ? className : ''}`.trim()}>
      {cards.map((card, index) => (
        <li className={s.card} key={index}>
          <Image src={card.icon} width={64} height={64} alt={card.title} />
          <span className={s.card_title}>{card.title}</span>
          <p className={s.card_subtitle}>{card.subtitle}</p>
        </li>
      ))}
    </ul>
  );
};
