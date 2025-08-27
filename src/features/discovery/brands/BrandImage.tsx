interface BrandImageProps {
  image: string;
  title: string;
}

const BrandImage = ({ title, image }: BrandImageProps) => {
  return (
    <div
      className={`before:bg-black-500 before:none mobile-1:w-60 mobile-1:text-sm tablet:w-[calc(80%_+_64px)] desktop-1:h-80 relative h-60 w-[calc(80%_+_64px)] bg-[linear-gradient(to_top_left,_rgb(92,124,250,.5),_rgb(153,181,255,.5)),url('${image}')] bg-cover bg-center bg-no-repeat text-xs bg-blend-color before:absolute before:-z-1 before:h-full before:w-full`}
    >
      <h3 className="desktop-1:text-sm text-white-100 desktop-2:text-[16px] min-desktop-3:text-[18px] desktop-1:p-4 desktop-2:p-6 relative p-3 font-[Bruno_Ace] text-xs uppercase">
        {title}
      </h3>
    </div>
  );
};

export default BrandImage;
