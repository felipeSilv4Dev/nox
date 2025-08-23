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
            className={`${active === i ? 'bg-blue-200' : 'bg-black-400'} desktop-2:h-[5px] mt-4 h-1 w-14 cursor-pointer rounded-full transition-all duration-75 ease-linear`}
          />
        ))}
      </div>
    );
};

export default ButtonSlide;
