import { Container } from 'ui/components/Container';
import { SellersSidebar } from './components/SellersSidebar';

import s from './Sellers.module.scss';
import { SellersStats } from './components/SellersStats';

export default async function Sellers() {
  return (
    <div className={s.sellers}>
      <Container>
        <div className={s.flexbox}>
          <SellersSidebar />
          <SellersStats />
        </div>
      </Container>
    </div>
  );
}
