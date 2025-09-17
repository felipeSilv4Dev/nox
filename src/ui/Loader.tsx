import LoaderBar from '../features/loader/LoaderBar';
import LoaderLogo from '../features/loader/LoaderLogo';

const Loader = () => {
  return (
    <section className="bg-black-800 text-white-100 relative z-1 flex h-dvh items-center justify-center">
      <div className="flex w-fit flex-col items-center justify-center gap-6">
        <LoaderLogo />
        <LoaderBar />
      </div>
      <div className="tablet:blur-[9rem] absolute top-1/2 left-1/2 -z-1 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-600/70 blur-3xl"></div>
    </section>
  );
};

export default Loader;
