import { CellProps, Column } from 'react-table';

import { EnumPaymentStatus } from 'types/enums';
import { IPurchaseProduct } from 'types/shopTypes';

import { TableButton } from 'components/common/Table/button';
import { StatusBlock } from 'components/common/StatusBlock';

interface IGetPaymentColumns {
  href: string;
}

export const getPaymentColumns = ({ href }: IGetPaymentColumns) => {
  const columns: Column<any>[] = [
    {
      Header: 'payment_code',
      accessor: (row) => row.payment?.paymentCode || '!!! Need code',
      disableSortBy: true,
    },
    {
      Header: 'product_name ',
      accessor: (row) => row.productId?.shortDescription?.en,
      disableSortBy: true,
    },
    {
      Header: 'time_date',
      accessor: (row) => row.createdAt || '!!! Need Date',
      // sortType: 'datetime'
    },
    {
      Header: 'status',
      accessor: 'status',
      Cell: ({ value }) => <StatusBlock status={value} />,
      sortType: (rowA, rowB, columnId, desc) => {
        const statusA = rowA.original.status;
        const statusB = rowB.original.status;

        const statusOrder = [
          EnumPaymentStatus.PENDING,
          EnumPaymentStatus.SUCCEEDED,
          EnumPaymentStatus.CANCELED,
          EnumPaymentStatus.FAILED,
        ];

        const indexA = statusOrder.indexOf(statusA);
        const indexB = statusOrder.indexOf(statusB);

        return indexA - indexB;
      },
    },
    {
      Header: 'amount',
      accessor: 'price',
      Cell: ({ value }) => <>${value.toFixed(2)}</>,
    },
    {
      Header: 'null',
      Cell: ({ row }: CellProps<IPurchaseProduct>) => {
        const originalItem = row.original;

        return <TableButton href={`${href}?productId=${originalItem.id}`} />;
      },
    },
  ];

  return columns;
};
