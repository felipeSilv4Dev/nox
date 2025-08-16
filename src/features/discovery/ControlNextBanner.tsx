import * as Icon from 'feather-icons-react';
const ControlNextBanner = () => {
  return (
    <div className="absolute top-[45rem] right-0 z-1 space-y-2">
      <h3 className="text-white-100 text-center font-[Bruno_Ace]">next</h3>

      <div className="border-black-300 after:bg-white-100 flex h-14 w-24 cursor-pointer items-center justify-center overflow-hidden border-2 bg-[radial-gradient(circle_at_center,_rgba(77,101,220,.4),_rgba(6,6,11,1)_90%),url('../bg-image-1.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:-right-1 after:-bottom-1 after:-z-1 after:h-8 after:w-8">
        <Icon.Play className="text-white-100 h-8" />
      </div>
    </div>
  );
};

export default ControlNextBanner;
