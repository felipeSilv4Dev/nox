import ButtonHomeError from './ButtonHomeError';
import ImageError from './ImageError';
import LightError from './LightError';
import TitleError from './TitleError';

const ContainerError = () => {
  const tablet =
    'tablet:pt-0 tablet:w-[94%] tablet:grid-cols-[repeat(8,1fr)] tablet:grid-rows-[repeat(8,auto)]';
  const desktop =
    'desktop-1:py-20 desktop-1:w-[80%] desktop-2:w-[76%] desktop-1:grid-cols-[repeat(12,1fr)]  desktop-1:grid-rows-[repeat(12,auto)]';

  return (
    <main
      className={`${tablet} ${desktop} tablet:gap-8 relative mx-auto grid h-full max-w-[1600px] grid-cols-[repeat(4,1fr)] grid-rows-1 gap-x-8`}
    >
      <div className="tablet:row-end-5 relative z-1 col-span-full flex flex-col items-center justify-center px-4">
        <ImageError />
        <TitleError />
        <LightError />
        <p className="text-black-100 tablet:text-2xl mb-4 text-xl capitalize">
          Page not Found
        </p>
        <ButtonHomeError />
      </div>
    </main>
  );
};

export default ContainerError;
