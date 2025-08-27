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
    <div className="h-full flex-col space-y-4">
      <Swiper
        className="h-[90%]"
        modules={[Navigation]}
        onSwiper={handleSwiper}
        onActiveIndexChange={(index) => handleActiveSlide(index.activeIndex)}
        spaceBetween={32}
        slidesPerView={1.3}
      >
        {children}
      </Swiper>
      <ButtonSlide items={children} swiper={swiper} active={active} />
    </div>
  );
};

export default SlideBrands;
