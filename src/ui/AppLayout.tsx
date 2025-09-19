import { Outlet } from 'react-router';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import MenuOptions from '../features/menuMobile/MenuOptions';
import CartAddNotification from '../features/cartAddNotification/CartAddNotification';
import SendNotification from '../features/footer/SendNotification';
import Loader from './Loader';
import { useEffect, useState } from 'react';
import BannerDiscovery from '../features/discovery/intro/BannerDiscovery';

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const tablet =
    'tablet:pt-0 tablet:w-[94%] tablet:grid-cols-[repeat(8,1fr)] tablet:grid-rows-[repeat(8,auto)]';
  const desktop =
    'desktop-1:py-20 desktop-1:w-[80%] desktop-2:w-[76%] desktop-1:grid-cols-[repeat(12,1fr)]  desktop-1:grid-rows-[repeat(12,auto)]';

  useEffect(() => {
    const timeLoagin = setTimeout(() => setIsLoading(false), 8000);
    return () => clearTimeout(timeLoagin);
  }, []);

  if (isLoading) return <Loader />;
  if (!isLoading) {
    return (
      <section className="bg-black-900 h-max min-h-dvh">
        <BannerDiscovery />

        <main
          className={`${tablet} ${desktop} tablet:gap-8 relative mx-auto grid max-w-[1600px] grid-cols-[repeat(4,1fr)] grid-rows-1 gap-x-8`}
        >
          <Header />
          <MenuOptions />
          <CartAddNotification />
          <SendNotification />
          <Outlet />
        </main>
        <Footer />
      </section>
    );
  }
};

export default AppLayout;
