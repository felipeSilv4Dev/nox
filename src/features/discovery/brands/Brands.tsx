import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import ButtonSlideBrands from './ButtonSlideBrands';
import type { Swiper as SwiperType } from 'swiper/types';
import Brand from './Brand';
import { EffectFade } from 'swiper/modules';

const Brands = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const brands = [
    {
      nameBrand: 'lacoste',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image: './image-brand-1.jpg',
    },

    {
      nameBrand: 'cartier',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image: './image-brand-2.jpg',
    },
    {
      nameBrand: 'casio',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image: './image-brand-3.jpg',
    },
    {
      nameBrand: 'rolex',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image: './image-brand-4.jpg',
    },
  ];
  return (
    <section className="tablet:px-0 tablet:mt-16 relative z-1 col-span-full mt-12 px-4">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        className="relative h-fit"
        spaceBetween={32}
        onSwiper={(swiper) => setSwiper(swiper)}
        onActiveIndexChange={(index) => setActiveIndex(index.activeIndex)}
      >
        <ButtonSlideBrands active={activeIndex} swiper={swiper} />
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="!h-[400px]">
            <Brand active={activeIndex} index={index} item={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tablet:h-60 tablet:w-60 tablet:blur-[9rem] absolute top-1/2 -left-[30%] -z-1 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-600 blur-3xl"></div>
    </section>
  );
};

export default Brands;
