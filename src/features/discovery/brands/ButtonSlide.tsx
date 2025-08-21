import type { ReactNode } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';

interface ButtonSlideProps {
  items: ReactNode;
  swiper: SwiperType | null;
  active: number;
}

const ButtonSlide = ({ items, swiper, active }: ButtonSlideProps) => {
  function handleToSlideIndex(index: number) {
    swiper?.slideTo(index);
  }

  if (items instanceof Array)
    return (
      <div className="desktop-1:gap-4 flex items-center justify-center gap-3">
        {items.map((_, i) => (
          <span
            key={i}
            onClick={() => handleToSlideIndex(i)}
            className={`${active === i ? 'bg-blue-200' : 'bg-black-400'} desktop-1:mt-4 desktop-2:mt-6 min-desktop-3:mt-8 tablet:w-12 desktop-1:w-16 desktop-1:h-1 tablet:h-[3px] cursor-pointer rounded-full transition-all duration-75 ease-linear`}
          />
        ))}
      </div>
    );
};

export default ButtonSlide;
