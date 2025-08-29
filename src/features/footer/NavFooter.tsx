import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContainerPages from './ContainerPages';
import ControlNavFooter from './ControlNavFooter';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';

const NavFooter = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navs = [{ title: 'about' }, { title: 'faq' }, { title: 'support' }];

  function handleToNextNav(index: number) {
    if (!swiper) return;
    swiper.slideTo(index);
  }
  return (
    <div className="col-span-full space-y-5">
      <ControlNavFooter
        onNavNext={handleToNextNav}
        active={activeIndex}
        items={navs}
      />
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        allowTouchMove={false}
        className="h-fit"
        onSwiper={(swiper) => setSwiper(swiper)}
        onActiveIndexChange={(index) => setActiveIndex(index.activeIndex)}
      >
        {navs.map((nav, index) => (
          <SwiperSlide key={index}>
            <ContainerPages
              title={nav.title}
              index={index}
              active={activeIndex}
              description="Modi beatae aperiam rem eveniet, perferendis cupiditate illum consequatur eligendi hic. Autem saepe aut nam sequi reprehenderit. Iste quisquam tempora quaerat porro"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NavFooter;
