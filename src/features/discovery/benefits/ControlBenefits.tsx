import type { Swiper as SwiperType } from 'swiper/types';
import UseMatch from '../../../utils/UseMatch';

interface ControlBenefitsProps {
  swiper: SwiperType | null;
  active: number;
}
const ControlBenefits = ({ swiper, active }: ControlBenefitsProps) => {
  const isTablet = UseMatch('48em');
  const isDesktop = UseMatch('80em');
  let controls;
  if (!swiper) return;
  controls = Array.from({ length: swiper.slides.length });
  if (isTablet) {
    controls = Array.from({ length: swiper.slides.length - 1 });
  }
  if (isDesktop) {
    controls = controls = Array.from({ length: 1 });
  }

  return (
    <div className="absolute top-2 right-2 flex gap-1">
      {controls.map((_, index) => (
        <span
          key={index}
          className={`${active === index ? 'bg-white-100' : 'bg-black-400'} z-1 block h-1 w-1 rounded-full transition-all duration-75 ease-linear`}
        />
      ))}
    </div>
  );
};

export default ControlBenefits;
