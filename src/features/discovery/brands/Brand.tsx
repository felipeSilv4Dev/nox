interface BrandProps {
  active: number;
  index: number;
}

const Brand = ({ active, index }: BrandProps) => {
  return (
    <article
      className={`flex h-full flex-col justify-end space-y-3 bg-blue-900 px-4 py-12`}
    >
      <div className="space-y-1">
        <span className="text-white-100 tablet:text-sm block font-['Assistant'] text-xs font-semibold uppercase">
          brand - {index}
        </span>
        <h2
          className={`${active === index ? 'animate-intro opacity-0' : ''} text-white-100 desktop-1:text-4xl font-[Bruno_Ace] text-xl uppercase`}
        >
          Lacoste
        </h2>
      </div>
      <p
        className={`${active === index ? 'animate-intro opacity-0' : ''} tablet:text-sm text-white-500 font-['Assistant'] text-sm`}
      >
        Explore top brands known for quality, style, and timeless design.
      </p>
    </article>
  );
};

export default Brand;
