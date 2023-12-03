'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { MinorButton } from 'ui/components/Button';

import StripeIcon from 'assets/images/payments/stripe.svg';
import PayPalIcon from 'assets/images/payments/pay-pal.svg';
import CryptoIcon from 'assets/images/payments/crypto.svg';

import s from './PaymentMethods.module.scss';

interface PaymentMethodsProps {}

export const PaymentMethods: FC<PaymentMethodsProps> = () => {
  const t = useTranslations('ProfilePage.Payment.Methods');

  const handleConnectStripe = () => {};
  const handleConnectPayPal = () => {};
  const handleConnectCrypto = () => {};

  const methods = [
    {
      name: t('stripe'),
      description: t('stripe_description'),
      icon: StripeIcon,
      action: () => handleConnectStripe(),
    },
    {
      name: t('paypal'),
      description: t('paypal_description'),
      icon: PayPalIcon,
      height: 28,
      action: () => handleConnectPayPal(),
    },
    {
      name: t('crypto'),
      description: t('crypto_description'),
      icon: CryptoIcon,
      action: () => handleConnectCrypto(),
    },
  ];

  return (
    <div className={s.methods}>
      <div className={s.methods_top}>
        <h4>{t('title')}</h4>
      </div>
      <ul className={s.methods_list}>
        {methods.map((method, index) => (
          <li className={s.method} key={index}>
            <div className={s.method_box}>
              <div className={s.method_image}>
                <Image
                  src={method.icon}
                  width={24}
                  height={method.height || 24}
                  alt={method.name}
                />
              </div>
              <div>
                <span className={s.method_name}>{method.name}</span>
                <p className={s.method_description}>{method.description}</p>
              </div>
            </div>
            <MinorButton className={s.method_button} onClick={method.action}>
              {t('connect')}
            </MinorButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
