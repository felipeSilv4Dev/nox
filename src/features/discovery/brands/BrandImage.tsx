interface BrandImageProps {
  image: number;
  title: string;
}
const BrandImage = ({ image, title }: BrandImageProps) => {
  return (
    <div
      className={`before:bg-black-500 border-black-900 desktop-1:h-60 desktop-1:w-60 min-desktop-3:w-90 min-desktop-3:before:top-6 min-desktop-3:before:-right-6 min-desktop-3:h-90 relative border-r-4 border-b-4 bg-[linear-gradient(to_top_left,_rgba(185,207,255,.7),_rgba(92,124,250,.7)),url('./image-brand-${image}.jpg')] tablet:before:top-3 tablet:before:-right-3 tablet:h-46 tablet:w-46 bg-cover bg-center bg-no-repeat bg-blend-color before:absolute before:top-4 before:-right-4 before:-z-1 before:h-full before:w-full`}
    >
      <h3 className="tablet:text-xs desktop-1:text-sm text-white-100 desktop-2:2xl desktop-1:p-4 p-3 font-[Bruno_Ace] uppercase">
        {title}
      </h3>
    </div>
  );
};

export default BrandImage;
