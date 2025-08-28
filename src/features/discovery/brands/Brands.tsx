import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import ButtonSlideBrands from './ButtonSlideBrands';
import type { Swiper as SwiperType } from 'swiper/types';
import Brand from './Brand';
import { EffectFade } from 'swiper/modules';

const Brands = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const brands = Array.from({ length: 4 });
  return (
    <section className="tablet:px-0 z-1 col-span-full px-4">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        className="relative h-fit"
        allowTouchMove={false}
        spaceBetween={32}
        onSwiper={(swiper) => setSwiper(swiper)}
        onActiveIndexChange={(index) => setActiveIndex(index.activeIndex)}
      >
        <ButtonSlideBrands active={activeIndex} swiper={swiper} />
        {brands.map((_, index) => (
          <SwiperSlide key={index} className="!h-[400px]">
            <Brand active={activeIndex} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;
