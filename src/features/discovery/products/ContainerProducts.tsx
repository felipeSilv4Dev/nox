import { Swiper, SwiperSlide } from 'swiper/react';
import UseMatch from '../../../utils/UseMatch';
import Product from '../../product/Product';
import useGlobalStorage from '../../../utils/useGlobalStorage';
import type { Swiper as SwiperType } from 'swiper/types';

const ContainerProducts = () => {
  const tablet = UseMatch('80rem');
  const desktop = UseMatch('100rem');
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
      className="h-fit w-full"
      spaceBetween={24}
      onSwiper={handleSwiper}
      onActiveIndexChange={handleActiveIndexChange}
      slidesPerView={desktop ? 5 : tablet ? 4 : 1.45}
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
