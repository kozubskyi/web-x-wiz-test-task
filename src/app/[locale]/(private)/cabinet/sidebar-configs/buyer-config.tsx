import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
  ],
};
