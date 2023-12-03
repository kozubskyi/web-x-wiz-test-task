import { FC } from 'react';
import { EnumPaymentStatus } from 'types/enums';

import s from './StatusBlock.module.scss';

const statuses = {
  [EnumPaymentStatus.PENDING]: 'status_pending',
  [EnumPaymentStatus.SUCCEEDED]: 'status_succeeded',
  [EnumPaymentStatus.CANCELED]: 'status_canceled',
  [EnumPaymentStatus.FAILED]: 'status_failed',
};

interface StatusBlockProps {
  status: EnumPaymentStatus;
}

export const StatusBlock: FC<StatusBlockProps> = ({ status }) => {
  return (
    <div className={`${s.status} ${s[statuses[status as EnumPaymentStatus]]}`}>
      <span>{status}</span>
    </div>
  );
};
