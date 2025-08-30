import Benefits from '../features/discovery/benefits/Benefits';
import Brands from '../features/discovery/brands/Brands';
import BannerDiscovery from '../features/discovery/intro/BannerDiscovery';
import Intro from '../features/discovery/intro/Intro';
import Products from '../features/discovery/products/Products';

const Discovery = () => {
  return (
    <>
      <BannerDiscovery />
      <Intro />
      <Brands />
      <Products />
      <Benefits />
    </>
  );
};

export default Discovery;
