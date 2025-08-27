import * as FeatherIcon from 'feather-icons-react';
import ProductsServices from '../../../services/products/ProductsServices';

const ControlNextProducts = () => {
  const productsServices = ProductsServices();

  return (
    <div className="flex gap-2">
      <button
        disabled={!productsServices?.existPrev}
        onClick={productsServices?.prev}
        className={`tablet:h-12 tablet:w-12 border-black-500 hover:bg-black-500 tablet:flex hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`}
      >
        <FeatherIcon.ChevronLeft className="text-white-100 h-6" />
      </button>

      <button
        disabled={!productsServices?.existNext}
        onClick={productsServices?.next}
        className={`tablet:h-12 tablet:w-12 border-black-500 hover:bg-black-500 tablet:flex hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`}
      >
        <FeatherIcon.ChevronRight className="text-white-100 h-6" />
      </button>
    </div>
  );
};
export default ControlNextProducts;
