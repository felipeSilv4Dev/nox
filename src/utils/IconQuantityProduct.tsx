import { type ReactNode } from 'react';

const IconQuantityProduct = ({ children }: { children: ReactNode }) => {
  return (
    <span className="border-black-500 block border-1 p-2 text-blue-200">
      {children}
    </span>
  );
};

export default IconQuantityProduct;
