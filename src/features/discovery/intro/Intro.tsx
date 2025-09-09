import Button from './Button';
import Title from './Title';

const Intro = () => {
  return (
    <section className="desktop-1:row-span-12 tablet:row-span-8 tablet:h-[70vh] relative z-1 col-span-full row-span-4 grid h-[80vh] min-h-max grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,auto)] px-4">
      <div className="tablet:block tablet:m-0 col-span-12 row-start-3 mx-auto flex flex-col items-center">
        <Title />
        <div className="tablet:h-60 tablet:w-60 tablet:blur-[7rem] absolute top-1/2 left-1/2 -z-1 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-3xl"></div>
        <Button>explore</Button>
      </div>
    </section>
  );
};
export default Intro;
