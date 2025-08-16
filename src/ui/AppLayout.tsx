import { Outlet } from 'react-router';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

const AppLayout = () => {
  return (
    <div className="bg-black-900 h-[max_content] min-h-dvh">
      <main className="gap relative mx-auto grid h-[calc(max_content_-100px)] grid-cols-[repeat(12,1fr)] p-8 md:w-[88%] md:py-16 xl:w-[78%] xl:py-20 2xl:w-[72%]">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
