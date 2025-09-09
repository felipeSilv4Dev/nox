import type { ReactNode } from 'react';

const InfoProduct = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-white-100 font-['Assistant'] text-sm">{children} </p>
  );
};

export default InfoProduct;
