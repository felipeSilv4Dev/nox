import UseMatch from '../../../utils/UseMatch';

const BannerDiscovery = () => {
  const isTablet = UseMatch('64rem');

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at center,rgba(6,6,11,.3),rgba(6,6,11,1) 60%),url(${isTablet ? 'https://www.benbridge.com/on/demandware.static/-/Library-Sites-BBJSharedLibrary/default/dw470e7072/images/rolex-v7/rolex-collection-pages/rolex-collection-pages-assets/rolex-collection-page-deepsea/rolex-collection-page-rolex-deepsea-assets-landscape/rolex-deepsea-m136660-0005_2403bh_0002.jpg' : 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1200/v1708403476/rolexcom/collection/family-pages/professional-watches/sea-dweller/citizen-of-the-deep/professional-watches-sea-dweller-citizen-of-the-deep-water-beauty-m126600-0002-2210jva-001'})`,
      }}
      className={`absolute top-0 left-0 z-0 h-screen w-full bg-cover bg-center bg-no-repeat px-4 transition-all ease-linear`}
    />
  );
};

export default BannerDiscovery;
