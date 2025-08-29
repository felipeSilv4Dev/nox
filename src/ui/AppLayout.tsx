import { Outlet } from 'react-router';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import MenuOptions from '../features/menuMobile/MenuOptions';

const AppLayout = () => {
  const tablet =
    'tablet:pt-0 tablet:w-[94%] tablet:grid-cols-[repeat(8,1fr)] tablet:grid-rows-[repeat(8,auto)]';
  const desktop =
    'desktop-1:py-20 desktop-1:w-[80%] desktop-2:w-[76%] desktop-1:grid-cols-[repeat(12,1fr)] desktop-1:grid-rows-[repeat(12,auto)]';

  return (
    <section className="bg-black-900 h-max min-h-dvh">
      <main
        className={`${tablet} ${desktop} relative mx-auto grid min-h-screen max-w-[1600px] grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,1fr)] gap-8`}
      >
        <Header />
        <MenuOptions />
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default AppLayout;
