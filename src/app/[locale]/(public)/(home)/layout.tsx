import { Footer } from 'components/Footer';
import { Header } from 'components/header';

import './Home.scss';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Header
        className="home-header"
        isPaddingTop={false}
      />
      {children}
      <Footer />
    </>
  );
}
