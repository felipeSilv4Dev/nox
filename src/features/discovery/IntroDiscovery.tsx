import ControlNextBanner from './ControlNextBanner';
import Button from '../../utils/Button';
import Title from './Title';
import Light from './Light';

const IntroDiscovery = () => {
  return (
    <section className="desktop-1:row-span-12 tablet:row-span-8 relative z-1 col-span-full row-span-4 grid min-h-[max_contain] grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,auto)]">
      <Light />
      <div className="tablet:block tablet:m-0 col-span-full row-start-3 mx-auto flex h-fit w-fit flex-col items-center">
        <Title>PRECISION, SOPHISTICATION, AND DURABILITY</Title>
        <Button>explore</Button>
      </div>
      <span className="text-black-400 min-desktop-3:text-7xl tablet:text-4xl desktop-1:text-5xl desktop-2:text-6xl -col-end-1 h-[max-content] text-right font-['Bruno_Ace'] text-3xl">
        01
      </span>

      <ControlNextBanner />
    </section>
  );
};

export default IntroDiscovery;
