import { Swiper, SwiperSlide } from 'swiper/react';

const ImagesProduct = () => {
  return (
    <Swiper
      className="h-110 w-full"
      spaceBetween={16}
      slidesPerView={1}
      centeredSlides
    >
      <SwiperSlide>
        <div className='h-full w-full bg-[url("../product-1.jpg")] bg-cover bg-center bg-no-repeat' />
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-full w-full bg-[url("../product-1.jpg")] bg-cover bg-center bg-no-repeat' />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImagesProduct;
