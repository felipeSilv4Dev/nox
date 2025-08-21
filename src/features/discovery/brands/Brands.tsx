// import SlideBrands from './SlideBrands';

import { SwiperSlide } from 'swiper/react';
import BrandImage from './BrandImage';
import SlideBrands from './SlideBrands';
import BrandTitle from './BrandTitle';

const Brands = () => {
  return (
    <section className="desktop-1:row-span-12 tablet:row-span-8 relative z-1 col-span-full row-span-4 mt-8 grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,auto)]">
      <BrandTitle />

      <ul className="col-span-1 -col-end-1 row-span-4">
        <SlideBrands>
          <SwiperSlide className="cursor-pointer">
            <div className="desktop-1:gap-8 grid h-full grid-cols-[repeat(2,auto)] gap-4">
              <BrandImage image={1} title="lacoste" />
              <BrandImage image={2} title="cartier" />
              <BrandImage image={3} title="cassio" />
              <BrandImage image={4} title="rolex" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div className="desktop-1:gap-8 grid h-full grid-cols-[repeat(2,auto)] gap-4">
              <BrandImage image={1} title="lacoste" />
              <BrandImage image={2} title="cartier" />
              <BrandImage image={3} title="cassio" />
              <BrandImage image={4} title="rolex" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-pointer">
            <div className="desktop-1:gap-8 grid h-full grid-cols-[repeat(2,auto)] gap-4">
              <BrandImage image={1} title="lacoste" />
              <BrandImage image={2} title="cartier" />
              <BrandImage image={3} title="cassio" />
              <BrandImage image={4} title="rolex" />
            </div>
          </SwiperSlide>
        </SlideBrands>
      </ul>
    </section>
  );
};

export default Brands;
