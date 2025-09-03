import * as FeatherIcon from 'feather-icons-react';

const TrashProduct = () => {
  return (
    <span className="border-black-500 flex w-full justify-center border-1 p-2">
      <FeatherIcon.Trash className="h-4 w-4 text-red-200" />
    </span>
  );
};

export default TrashProduct;
