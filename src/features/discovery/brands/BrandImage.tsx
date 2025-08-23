interface BrandImageProps {
  image: string;
  title: string;
}

const BrandImage = ({ title, image }: BrandImageProps) => {
  return (
    <div
      className={`before:bg-black-500 tablet:h-50 tablet:w-50 desktop-1:h-65 desktop-1:w-65 before:none mobile-1:h-60 mobile-1:w-60 mobile-1:text-sm relative h-60 w-60 bg-[linear-gradient(to_top_left,_rgba(185,207,255,.7),_rgba(92,124,250,.7)),url('${image}')] bg-cover bg-center bg-no-repeat text-xs bg-blend-color before:absolute before:-z-1 before:h-full before:w-full`}
    >
      <h3 className="desktop-1:text-sm text-white-100 desktop-2:text-[16px] min-desktop-3:text-[18px] desktop-1:p-4 desktop-2:p-6 relative p-3 font-[Bruno_Ace] text-xs uppercase">
        {title}
      </h3>
    </div>
  );
};

export default BrandImage;
