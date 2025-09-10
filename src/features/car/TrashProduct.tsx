import * as FeatherIcon from 'feather-icons-react';

const TrashProduct = ({ onRemove }: { onRemove: () => void }) => {
  return (
    <span
      onClick={onRemove}
      className="border-black-500 tablet:p-4 hover:bg-black-500 flex h-fit w-full cursor-pointer items-center justify-center border-1 p-2 transition-all duration-75 ease-linear"
    >
      <FeatherIcon.Trash className="tablet:w-6 tablet:h-6 h-4 w-4 text-red-200" />
    </span>
  );
};

export default TrashProduct;
