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
      nameBrand: 'casio',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image:
        'https://gshock.casio.com/content/casio/locales/sg/en/brands/gshock/g-news/new-releases/2025/dw-5000r/_jcr_content/root/responsivegrid/container_copy/container_2106131580/teaser_copy_copy.casiocoreimg.jpeg/1740637561335/banner-dw-5000r-pc-new.jpeg',
    },
    {
      nameBrand: 'lacoste',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image:
        'https://koala.sh/api/image/v2-8sf6v-cqiko.jpg?width=1344&height=768&dream',
    },

    {
      nameBrand: 'cartier',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image:
        'https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      nameBrand: 'rolex',
      descriptionBrand:
        'Explore top brands known for quality, style, and timeless design.',
      image:
        'https://www.benbridge.com/on/demandware.static/-/Library-Sites-BBJSharedLibrary/default/dw470e7072/images/rolex-v7/rolex-collection-pages/rolex-collection-pages-assets/rolex-collection-page-deepsea/rolex-collection-page-rolex-deepsea-assets-landscape/rolex-deepsea-m136660-0005_2403bh_0002.jpg',
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
