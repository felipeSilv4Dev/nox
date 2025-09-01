import Button from '../../../utils/Button';
import Title from './Title';

const Intro = () => {
  return (
    <section className="desktop-1:row-span-12 tablet:row-span-8 relative z-1 col-span-full row-span-4 grid h-[70vh] min-h-max grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,auto)] px-4">
      <div className="tablet:block tablet:m-0 col-span-12 row-start-3 mx-auto flex flex-col items-center">
        <Title />
        <Button>explore</Button>
      </div>
    </section>
  );
};

export default Intro;
