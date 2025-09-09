import QuantityProduct from '../../utils/QuantityProduct';

const FooterQuantityAndPrice = () => {
  return (
    <div className="tablet:mt-0 tablet:items-end mt-8 flex flex-wrap items-center justify-between gap-y-4">
      <h2 className="tablet:w-full text-2xl font-bold uppercase">$ 350.00</h2>
      <div className="space-y-1">
        <h2 className="text-white-700 tablet:text-base tablet:text-start text-end text-sm font-bold capitalize">
          quantity
        </h2>
        <QuantityProduct />
      </div>
      <span className="text-white-100 tablet:text-sm tablet:w-1/2 tablet:hover:from-blue-500 tablet:hover:to-blue-700 block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-4 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-75 ease-linear">
        add to car
      </span>
    </div>
  );
};

export default FooterQuantityAndPrice;
