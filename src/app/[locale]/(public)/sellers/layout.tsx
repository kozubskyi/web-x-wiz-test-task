import { Header } from 'components/header';

interface SellersLayoutProps {
  children: React.ReactNode;
}

export default async function SellersLayout({ children }: SellersLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
