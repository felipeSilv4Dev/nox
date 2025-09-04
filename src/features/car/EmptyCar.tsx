import ImageEmptyCar from './ImageEmptyCar';
import TitleEmptyCar from './TitleEmptyCar';

const EmptyCar = () => {
  return (
    <article className="tablet:gap-8 desktop-1:col-span-full desktop-1:h-auto relative z-1 mt-8 flex h-[68vh] flex-col items-center justify-center gap-4 text-xl">
      <ImageEmptyCar />
      <TitleEmptyCar />
      <div className="tablet:h-40 tablet:w-40 tablet:blur-[9rem] absolute top-1/2 left-1/2 -z-1 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[5rem]" />
    </article>
  );
};

export default EmptyCar;
