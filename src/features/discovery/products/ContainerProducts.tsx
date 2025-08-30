import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../../product/Product';
import useGlobalStorage from '../../../utils/useGlobalStorage';
import type { Swiper as SwiperType } from 'swiper/types';

const ContainerProducts = () => {
  const products = Array.from({ length: 15 });
  const { setModelsProduct, SetActiveModelsProduct } = useGlobalStorage(
    (state) => state,
  );

  function handleSwiper(swiper: SwiperType) {
    setModelsProduct(swiper);
  }

  function handleActiveIndexChange(index: SwiperType) {
    SetActiveModelsProduct(index.activeIndex);
  }
  return (
    <Swiper
      spaceBetween={24}
      onSwiper={handleSwiper}
      onActiveIndexChange={handleActiveIndexChange}
      slidesPerView={1.45}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        },
      }}
    >
      {products.map((_, index) => (
        <SwiperSlide key={index} className="!h-fit">
          <Product />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContainerProducts;
