import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container } from 'ui/components/Container';

import CompleteShieldIcon from 'assets/images/icons/complete-shield.svg';
import HeadphoneIcon from 'assets/images/icons/headphone.svg';
import StoreIcon from 'assets/images/icons/store.svg';
import ChatIcon from 'assets/images/icons/chat.svg';

import s from './Main.module.scss';

export const Cards: FC = () => {
  const t = useTranslations('Home.Main');

  const cards = [
    { icon: CompleteShieldIcon, title: t('secure_payment') },
    { icon: HeadphoneIcon, title: t('support') },
    { icon: StoreIcon, title: t('customization') },
    { icon: ChatIcon, title: t('chat') },
  ];

  return (
    <Container>
      <ul className={s.main_cards}>
        {cards.map((card, index) => (
          <li className={s.card} key={index}>
            <Image src={card.icon} width={48} height={48} alt={card.title} />
            <span className={s.card_title}>{card.title}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};
