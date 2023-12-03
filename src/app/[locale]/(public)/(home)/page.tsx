import { Main } from './Main';
import { HomeFeatures } from './components/HomeFeatures';
import { HowWorks } from './HowWorks';
import { Players } from './Players';
import { HomeRating } from './components/HomeRating';
import { TopSelling } from './TopSelling';
import { HomeTopUsers } from './components/HomeTopUsers';
import { HomeTrading } from './components/HomeTrading';

export default async function Home() {

  return (
    <main>
      <Main />
      <TopSelling />
      <HowWorks />
      <Players />
      <HomeTopUsers
      />
      <HomeFeatures />
      <HomeTrading />
      <HomeRating />
    </main>
  );
}
