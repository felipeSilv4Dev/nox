import UseMatch from '../../../utils/UseMatch';

const BannerDiscovery = () => {
  const isTablet = UseMatch('64rem');

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at center,rgba(6,6,11,.4),rgba(6,6,11,1) 70%),url(${isTablet ? './bg-image-1-2x.jpg' : './bg-image-1-1x.jpg'})`,
      }}
      className={`absolute top-0 left-0 z-0 h-screen w-full bg-cover bg-center bg-no-repeat px-4 transition-all ease-linear`}
    />
  );
};

export default BannerDiscovery;
