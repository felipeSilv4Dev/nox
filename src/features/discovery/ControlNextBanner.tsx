import * as Icon from 'feather-icons-react';
const ControlNextBanner = () => {
  return (
    <div className="place-end z-1 -col-end-1 -row-end-1 flex flex-col items-end justify-end space-y-2">
      <h3 className="text-white-100 tablet:w-20 tablet:text-xl desktop-3:text-3xl desktop-3:w-32 w-18 text-center font-[Bruno_Ace] text-xs">
        next
      </h3>

      <div className="border-black-300 after:bg-white-100 tablet:h-12 tablet:w-20 desktop-3:w-32 desktop-3:h-16 flex h-10 w-18 cursor-pointer items-center justify-center overflow-hidden border-2 bg-[radial-gradient(circle_at_center,_rgba(77,101,220,.4),_rgba(6,6,11,1)_90%),url('../bg-image-1.jpg')] bg-cover bg-center bg-no-repeat">
        <Icon.Play className="text-white-100 desktop-3:h-8 h-4" />
      </div>
    </div>
  );
};

export default ControlNextBanner;
