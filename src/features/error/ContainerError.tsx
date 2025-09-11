import type { ReactNode } from 'react';
import ButtonHomeError from './ButtonHomeError';
import ImageError from './ImageError';
import LightError from './LightError';

const ContainerError = ({ children }: { children: ReactNode }) => {
  const tablet =
    'tablet:pt-0 tablet:w-[94%] tablet:grid-cols-[repeat(8,1fr)] tablet:grid-rows-[repeat(8,auto)]';
  const desktop =
    'desktop-1:py-20 desktop-1:w-[80%] desktop-2:w-[76%] desktop-1:grid-cols-[repeat(12,1fr)]  desktop-1:grid-rows-[repeat(12,auto)]';

  return (
    <main
      className={`${tablet} ${desktop} tablet:gap-8 relative mx-auto grid h-screen max-w-[1600px] grid-cols-[repeat(4,1fr)] grid-rows-1 gap-x-8`}
    >
      <div className="z-1 col-span-full row-span-full flex h-full flex-col items-center justify-center px-4">
        <LightError />
        <ImageError />
        {children}
        <ButtonHomeError />
      </div>
    </main>
  );
};

export default ContainerError;
