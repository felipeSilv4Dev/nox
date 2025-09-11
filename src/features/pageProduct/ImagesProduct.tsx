import { Swiper, SwiperSlide } from 'swiper/react';
import useGlobalStorage from '../../utils/useGlobalStorage';

const ImagesProduct = () => {
  const { product } = useGlobalStorage((state) => state);

  return (
    <Swiper
      className="h-110 w-full"
      spaceBetween={16}
      slidesPerView={1}
      centeredSlides
    >
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url('../${product?.image}')` }}
          className="h-full w-full bg-cover bg-center bg-no-repeat"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImagesProduct;
