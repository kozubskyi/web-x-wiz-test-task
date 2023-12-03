'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { IPurchaseProduct } from 'types/shopTypes';

import { getPaymentColumns } from 'utils/getPaymentColumns';

import { Table } from 'components/common/Table';
import { Section } from '../profile/Section';
import { IPaymentForm, Form } from './Form';

import s from './PaymentHistory.module.scss';

interface PaymentHistoryProps {
  boughtProducts: IPurchaseProduct[] | undefined;
  href: string;
}

export const PaymentHistory: FC<PaymentHistoryProps> = ({
  boughtProducts,
  href,
}) => {
  const t = useTranslations('ProfilePage.Payment');
  const tableTranslate = useTranslations('ProfilePage.Payment.Table');
  const [filteredProducts, setFilteredProducts] = useState(boughtProducts);

  const handleSearch = ({ transaction_code }: IPaymentForm) => {
    let searchProducts = boughtProducts;
    if (transaction_code) {
      searchProducts = boughtProducts?.filter(
        (product) =>
          product.payment.paymentCode
            ?.toLowerCase()
            .includes(transaction_code?.toLowerCase().trim())
      );
    }

    setFilteredProducts(searchProducts);
  };

  return (
    <div>
      <Section.BlockHeader>
        <h4>{t('history')}</h4>
      </Section.BlockHeader>
      <Section.BlockBody>
        <Form onSearch={handleSearch} />
      </Section.BlockBody>
      {filteredProducts?.length ? (
        <Table
          data={filteredProducts}
          columns={getPaymentColumns({ href })}
          translateFn={tableTranslate}
        />
      ) : (
        <div className={s.payment_noResults}>{t('Table.no_results')}</div>
      )}
    </div>
  );
};
