import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Container } from 'ui/components/Container';

import PaymentImg from 'assets/images/payment-group.png';

import s from './HomeTrading.module.scss';
import { List } from 'components/common/List';

export const HomeTrading: FC = () => {
  const t = useTranslations('Home.Trading');

  const items = [t('first_item'), t('second_item'), t('third_item')];

  return (
    <section className={s.trading}>
      <Container className={s.trading_container}>
        <div className={s.trading_content}>
          <h2>
            {t('title.primary')}
            <span> {t('title.accent')}</span>
          </h2>
          <p className="text_subtitle">{t('subtitle')}</p>
          <List className={s.trading_list} items={items} />
        </div>
        <div className={s.trading_image}>
          <Image src={PaymentImg} width={584} height={584} alt="Payment" />
        </div>
      </Container>
    </section>
  );
};
