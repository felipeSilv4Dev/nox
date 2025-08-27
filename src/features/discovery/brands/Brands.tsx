import { SwiperSlide } from 'swiper/react';
import BrandImage from './BrandImage';
import SlideBrands from './SlideBrands';
import BrandTitle from './BrandTitle';
// import Light from './Light';
// import DynamicSvg from '../../../utils/DynamicSvg';

const Brands = () => {
  return (
    <section className="tablet:row-span-8 tablet:grid-cols-4 tablet:grid-rows-[repeat(3,auto)] grid-rows-0 tablet:space-x-8 tablet:mt-8 tablet:h-[60vh] relative z-1 col-span-full mt-4 grid h-fit grid-cols-[repeat(1,1fr)] items-center justify-center space-y-4 p-4">
      <BrandTitle />

      <ul className="tablet:row-start-2 col-span-2 h-full w-full cursor-pointer mask-x-from-96%">
        {/* <Light /> */}
        <SlideBrands>
          <SwiperSlide>
            <BrandImage image={'./image-brand-1.jpg'} title="lacoste" />
          </SwiperSlide>
          <SwiperSlide>
            <BrandImage image={'./image-brand-2.jpg'} title="cartier" />
          </SwiperSlide>
          <SwiperSlide>
            <BrandImage image={'./image-brand-3.jpg'} title="cassio" />
          </SwiperSlide>
        </SlideBrands>
      </ul>
    </section>
  );
};

export default Brands;
//  <div className="absolute top-[58%] left-1/2 -z-1 -translate-x-1/2 -translate-y-1/2">
//       <DynamicSvg
//         paths={[
//           {
//             d: 'M381.564 307.612V535.305H153.871V307.612H381.564ZM155.65 533.526H379.785V309.391H155.65V533.526Z',
//             stroke: '#373A49',
//           },
//           {
//             d: 'M227.693 154.424V382.117H0V154.424H227.693ZM1.7793 380.338H225.914V156.203H1.7793V380.338Z',
//             stroke: '#373A49',
//           },
//           {
//             d: 'M381.564 0V227.693H153.871V0H381.564ZM155.65 225.914H379.785V1.7793H155.65V225.914Z',
//             stroke: '#373A49',
//           },
//           {
//             d: 'M534.974 154V381.693H307.28V154H534.974ZM309.059 379.914H533.194V155.779H309.059V379.914Z',
//             stroke: '#373A49',
//           },
//         ]}
//         color="#373A49"
//       />
//     </div>
