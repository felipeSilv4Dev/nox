import type { ReactNode } from 'react';

const ImageProduct = ({
  src,
  children,
}: {
  src: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(6, 6, 11,.1) 50%,rgba(6,6,11,.8) 95%),url(${src})`,
      }}
      className="tablet:hover:after:bg-blue-100/5 relative h-64 w-full bg-cover bg-center after:absolute after:block after:h-full after:w-full after:transition-all after:duration-75 after:ease-linear"
    >
      {children}
    </div>
  );
};

export default ImageProduct;
