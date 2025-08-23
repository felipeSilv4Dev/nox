import * as Icon from 'feather-icons-react';

const ControlNextBanner = () => {
  return (
    <div className="place-end z-1 -col-end-1 -row-end-1 flex flex-col items-end justify-end space-y-2">
      <h3 className="text-white-100 tablet:w-20 tablet:text-xl w-18 text-center font-[Bruno_Ace] text-xs">
        next
      </h3>

      <div
        className={
          'tablet:h-12 tablet:w-20 flex h-10 w-18 cursor-pointer items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(77,101,220,.4),_rgba(6,6,11,1)_90%),url("../bg-image-1.jpg")] bg-cover bg-center bg-no-repeat'
        }
      >
        <Icon.Play className="text-white-100 h-4" />
      </div>
    </div>
  );
};

export default ControlNextBanner;
