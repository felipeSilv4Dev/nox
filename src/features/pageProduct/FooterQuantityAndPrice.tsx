import QuantityProduct from '../../utils/QuantityProduct';
import useGlobalStorage from '../../utils/useGlobalStorage';

const FooterQuantityAndPrice = () => {
  const { product } = useGlobalStorage((state) => state);
  if (!product) return <></>;

  return (
    <div className="tablet:mt-0 tablet:items-end mt-8 flex flex-wrap items-center justify-between gap-y-4">
      <h2 className="tablet:w-full text-2xl font-bold uppercase">
        {product.price}
      </h2>
      <div className="space-y-1">
        <h2 className="text-white-700 tablet:text-base tablet:text-start text-end text-sm font-bold capitalize">
          quantity
        </h2>
        <QuantityProduct />
      </div>
      <span className="text-white-100 tablet:text-sm tablet:w-1/2 tablet:hover:from-blue-500 tablet:hover:to-blue-700 block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-4 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-75 ease-linear">
        add to car
      </span>

      <span className="text-black-900 tablet:text-sm tablet:w-1/2 block w-full cursor-pointer bg-red-400 py-4 text-center font-['Bruno_Ace'] text-xs uppercase transition-all duration-75 ease-linear hover:bg-red-300">
        remove from car
      </span>
    </div>
  );
};

export default FooterQuantityAndPrice;
