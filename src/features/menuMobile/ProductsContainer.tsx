import Product from './Product';

const ProductsContainer = () => {
  const intialInfo = (
    <p className="mobile-1:text-xl text-white-700 mt-4 text-center font-[Assistant] text-sm">
      Found Some Product
    </p>
  );
  return (
    <ul className="mobile-1:h-[60vh] relative mt-2 flex h-[50vh] w-full flex-col gap-2 overflow-y-scroll mask-b-from-90%">
      {intialInfo}
      <Product />
    </ul>
  );
};

export default ProductsContainer;
