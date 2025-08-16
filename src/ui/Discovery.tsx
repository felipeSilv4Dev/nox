import Button from '../utils/Button';
import ControlNextBanner from '../features/discovery/ControlNextBanner';
import BannerDiscovery from '../features/discovery/bannerDiscovery';
import Title from '../utils/Title';

const Discovery = () => {
  return (
    <>
      <BannerDiscovery />
      <span className="absolute top-[40%] left-1/2 block h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-900 to-blue-500 blur-[120px]" />

      <section className="relative z-1 col-span-full min-h-dvh">
        <Title size={'text-5xl'} w="w-[16ch]">
          PRECISION, SOPHISTICATION, AND DURABILITY
        </Title>

        <Button>explore</Button>

        <span className="text-black-400 absolute top-16 right-0 font-['Bruno_Ace'] text-6xl">
          01
        </span>
        <ControlNextBanner />
      </section>
    </>
  );
};

export default Discovery;
