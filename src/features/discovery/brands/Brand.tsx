import UseMatch from '../../../utils/UseMatch';

interface Brand {
  nameBrand: string;
  descriptionBrand: string;
  image: string;
}
interface BrandProps {
  active: number;
  index: number;
  item: Brand;
}

const Brand = ({ active, index, item }: BrandProps) => {
  const isTablet = UseMatch('64rem');

  return (
    <article
      style={{
        backgroundImage: isTablet
          ? `radial-gradient(circle at center,rgba(6,6,11,.1) 30%,rgba(6,6,11,.96) 100%),url(${item.image})`
          : `linear-gradient(to bottom,rgba(6, 6, 11,.3),rgba(6,6,11,.92)95%),url(${item.image})`,
      }}
      className={`desktop-1:py-24 desktop-1:px-8 flex h-full cursor-pointer flex-col justify-end space-y-3 bg-cover bg-center bg-no-repeat px-4 py-12`}
    >
      <div className="space-y-1">
        <span className="text-white-100 tablet:text-sm block font-['Assistant'] text-xs font-semibold uppercase">
          brand
        </span>
        <h2
          className={`${active === index ? 'animate-intro opacity-0' : ''} text-white-100 desktop-1:text-4xl font-[Bruno_Ace] text-xl uppercase`}
        >
          {item.nameBrand}
        </h2>
      </div>

      <p
        className={`${active === index ? 'animate-intro opacity-0' : ''} tablet:text-base text-white-300 w-[40ch] font-['Assistant'] text-sm`}
      >
        {item.descriptionBrand}
      </p>
    </article>
  );
};

export default Brand;
