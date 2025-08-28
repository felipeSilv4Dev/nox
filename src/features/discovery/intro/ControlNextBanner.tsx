import * as Icon from 'feather-icons-react';

const ControlNextBanner = () => {
  return (
    <div className="tablet:px-4 z-1 -col-1 -row-1 flex w-full flex-col items-end justify-end space-y-2">
      <div
        className={
          'tablet:h-12 tablet:w-12 border-black-500 hover:bg-black-500 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2'
        }
      >
        <Icon.ChevronRight className="text-white-100 h-6" />
      </div>
    </div>
  );
};

export default ControlNextBanner;
