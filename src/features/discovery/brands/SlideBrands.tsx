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
        className="tablet:w-full h-fit"
        modules={[Navigation]}
        onSwiper={handleSwiper}
        onActiveIndexChange={(index) => handleActiveSlide(index.activeIndex)}
        spaceBetween={2}
        slidesPerView={1.5}
      >
        {children}
      </Swiper>
      <ButtonSlide items={children} swiper={swiper} active={active} />
    </>
  );
};

export default SlideBrands;
