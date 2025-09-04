import { type ReactNode } from 'react';

const IconQuantityProduct = ({ children }: { children: ReactNode }) => {
  return (
    <span className="border-black-500 tablet:p-4 hover:bg-black-500 flex h-fit cursor-pointer items-center justify-center border-1 p-2 text-blue-200 transition-all duration-75 ease-linear">
      {children}
    </span>
  );
};

export default IconQuantityProduct;
