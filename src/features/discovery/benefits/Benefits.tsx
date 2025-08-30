import { Swiper, SwiperSlide } from 'swiper/react';
import Benefit from './Benefit';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';
import ControlBenefits from './ControlBenefits';
import * as FeatherIcon from 'feather-icons-react';

const Benefits = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const benefits = [
    {
      title: 'Quick Shipping',
      icon: <FeatherIcon.Truck className="text-white-100" />,
      list: ['delivry from 189,00', 'receive in 3-5 working days'],
    },
    {
      title: 'EASY PAYMENT',
      icon: <FeatherIcon.CreditCard className="text-white-100" />,
      list: ['delivry from 189,00', 'receive in 3-5 working days'],
    },
    {
      title: 'RETURNS',
      icon: <FeatherIcon.Repeat className="text-white-100" />,
      list: ['delivry from 189,00', 'receive in 3-5 working days'],
    },
  ];
  const breaksPoints = {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <section className="bg-black-800 tablet:mx-0 tablet:mt-14 relative col-span-full mx-4 px-4 py-2">
      <ControlBenefits swiper={swiper} active={activeIndex} />
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        onActiveIndexChange={(index) => setActiveIndex(index.activeIndex)}
        breakpoints={breaksPoints}
      >
        {benefits.map((benefit, index) => (
          <SwiperSlide key={index}>
            <Benefit title={benefit.title} list={benefit.list}>
              {benefit.icon}
            </Benefit>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Benefits;
