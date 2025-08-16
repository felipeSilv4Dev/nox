import { Outlet } from 'react-router';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

const AppLayout = () => {
  return (
    <div className="bg-black-900 h-[max_content] min-h-dvh">
      <main className="desktop-3:w-[1800px] desktop-2:w-[72%] desktop-1:py-20 desktop-1:w-[78%] tablet:py-16 tablet:w-[88%] tablet:grid-cols-[repeat(8,1fr)] desktop-1:grid-cols-[repeat(12,1fr)] tablet:grid-rows-[repeat(8,auto)] desktop-1:grid-rows-[repeat(12,auto)] relative mx-auto grid min-h-[calc(100vh_-_100px)] grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,1fr)] gap-8 p-8">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
