import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { ApplePayIcon } from 'components/icons/payments/ApplePayIcon';
import { AmericanExpressIcon } from 'components/icons/payments/AmericanExpressIcon';
import { MastercardIcon } from 'components/icons/payments/MastercardIcon';
import { GooglePayIcon } from 'components/icons/payments/GooglePayIcon';
import { VisaIcon } from 'components/icons/payments/VisaIcon';
import { CoinbaseIcon } from 'components/icons/payments/CoinbaseIcon';
import { ColorPayPal } from 'components/icons/payments/ColorPayPal';

import s from '../../Footer.module.scss';

export const FooterPayments: FC = () => {
  const t = useTranslations('Footer');

  const payments = [
    { icon: <ApplePayIcon />, alt: 'Apple Pay' },
    { icon: <AmericanExpressIcon />, alt: 'American Express' },
    { icon: <MastercardIcon />, alt: 'Mastercard' },
    { icon: <ColorPayPal />, alt: 'PayPal' },
    { icon: <GooglePayIcon />, alt: 'Google Pay' },
    { icon: <VisaIcon />, alt: 'Visa' },
    { icon: <CoinbaseIcon />, alt: 'Coinbase', width: 107 },
  ];

  return (
    <div className={s.payments}>
      <span className={s.column_title}>{t('Payments.title')}</span>
      <ul className={s.payments_list}>
        {payments.map((payment, index) => (
          <li className={s.payment} key={index}>
            <button className={s.payment_button}>{payment.icon}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
