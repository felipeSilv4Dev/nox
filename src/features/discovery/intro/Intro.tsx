import Button from '../../../utils/Button';
import DynamicSvg from '../../../utils/DynamicSvg';
import Title from './Title';

const Intro = () => {
  return (
    <section className="desktop-1:row-span-12 tablet:row-span-8 tablet:h-[70vh] relative z-1 col-span-full row-span-4 grid h-[80vh] min-h-max grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,auto)] px-4">
      <div className="tablet:block tablet:m-0 col-span-12 row-start-3 mx-auto flex flex-col items-center">
        <Title />
        <div className="tablet:h-60 tablet:w-60 tablet:blur-[7rem] absolute top-1/2 left-1/2 -z-1 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-3xl"></div>
        <Button>explore</Button>
      </div>

      <DynamicSvg
        color={'#7999fe'}
        paths={[
          {
            d: 'M381.564 307.612V535.305H153.871V307.612H381.564ZM155.65 533.526H379.785V309.391H155.65V533.526Z',
          },
          {
            d: 'M227.693 154.424V382.117H0V154.424H227.693ZM1.7793 380.338H225.914V156.203H1.7793V380.338Z',
          },
          {
            d: 'M381.564 0V227.693H153.871V0H381.564ZM155.65 225.914H379.785V1.7793H155.65V225.914Z',
          },
          {
            d: 'M534.974 154V381.693H307.28V154H534.974ZM309.059 379.914H533.194V155.779H309.059V379.914Z',
          },
        ]}
      />
    </section>
  );
};
export default Intro;
