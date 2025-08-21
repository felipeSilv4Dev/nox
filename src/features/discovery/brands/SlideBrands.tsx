import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState, type ReactNode } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';
import ButtonSlide from './ButtonSlide';

interface SlideProps {
  children: ReactNode;
}
const SlideBrands = ({ children }: SlideProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  function handleSwiper(swiper: SwiperType) {
    setSwiper(swiper);
  }

  function handleActiveSlide(index: number) {
    setActive(index);
  }
  return (
    <>
      <Swiper
        className="tablet:w-100 tablet:h-108 desktop-1:h-134 desktop-1:w-134 min-desktop-3:h-200 min-desktop-3:w-200"
        modules={[Navigation]}
        onSwiper={handleSwiper}
        onActiveIndexChange={(index) => handleActiveSlide(index.activeIndex)}
        spaceBetween={32}
        slidesPerView={1}
      >
        {children}
      </Swiper>
      <ButtonSlide items={children} swiper={swiper} active={active} />
    </>
  );
};

export default SlideBrands;
