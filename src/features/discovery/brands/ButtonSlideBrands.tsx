import type { Swiper } from 'swiper/types';

interface ButtonSlideBrandsProps {
  active: number;
  swiper: Swiper | null;
}
const ButtonSlideBrands = ({ active, swiper }: ButtonSlideBrandsProps) => {
  if (!swiper) return;

  const brandPoints = Array.from({ length: swiper.slides.length });

  function handleToSlideTouch(index: number) {
    if (!swiper) return;
    swiper.slideTo(index);
  }

  return (
    <div className="absolute top-1/2 right-2 z-3 flex w-10 -translate-y-1/2 flex-col items-center gap-y-4 text-white">
      {brandPoints.map((_, index) => (
        <div
          key={index}
          className="w-ful flex-1 cursor-pointer p-2"
          onClick={() => handleToSlideTouch(index)}
        >
          <span
            className={`block ${active === index ? 'h-3 w-3' : 'h-1 w-1'} bg-white-300 rounded-full transition-all duration-200 ease-linear`}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonSlideBrands;
