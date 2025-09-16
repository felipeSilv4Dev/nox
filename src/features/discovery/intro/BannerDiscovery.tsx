import UseMatch from '../../../utils/UseMatch';

const BannerDiscovery = () => {
  const isTablet = UseMatch('64rem');

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at center,rgba(6,6,11,.3),rgba(6,6,11,1) 60%),url(${isTablet ? 'https://images.unsplash.com/photo-1601801958048-aa2e1c3e21e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://images.unsplash.com/photo-1601801958048-aa2e1c3e21e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
      }}
      className={`absolute top-0 left-0 z-0 h-screen w-full bg-cover bg-center bg-no-repeat px-4 transition-all ease-linear`}
    />
  );
};

export default BannerDiscovery;
