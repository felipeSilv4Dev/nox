import ControlNextBanner from './ControlNextBanner';
import Button from '../../../utils/Button';
import Title from './Title';
// import Light from './Light';

const Intro = () => {
  return (
    <section className="desktop-1:row-span-12 tablet:row-span-8 relative z-1 col-span-full row-span-4 grid h-[70vh] min-h-[max_contain] grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,auto)]">
      {/* <Light /> */}
      <div className="tablet:block tablet:m-0 col-span-12 row-start-4 mx-auto flex flex-col items-center">
        <Title>PRECISION, SOPHISTICATION, AND DURABILITY</Title>
        <Button>explore</Button>
      </div>
      <span className="tablet:text-4xl desktop-1:text-5xl desktop-2:text-6xl -col-1 h-[max-content] px-4 text-right font-['Bruno_Ace'] text-3xl text-blue-100">
        01
      </span>

      <ControlNextBanner />
    </section>
  );
};

export default Intro;
