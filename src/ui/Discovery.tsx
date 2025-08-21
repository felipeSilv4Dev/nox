import Brands from '../features/discovery/brands/Brands';
import BannerDiscovery from '../features/discovery/intro/BannerDiscovery';
import IntroDiscovery from '../features/discovery/intro/IntroDiscovery';

const Discovery = () => {
  return (
    <>
      <BannerDiscovery />
      <IntroDiscovery />
      <Brands />
    </>
  );
};

export default Discovery;
