import Benefits from '../features/discovery/benefits/Benefits';
import Brands from '../features/discovery/brands/Brands';
import Intro from '../features/discovery/intro/Intro';
import Products from '../features/discovery/products/Products';
import useToTop from '../utils/useToTop';

const Discovery = () => {
  useToTop();

  return (
    <>
      <Intro />
      <Brands />
      <Products />
      <Benefits />
    </>
  );
};

export default Discovery;
