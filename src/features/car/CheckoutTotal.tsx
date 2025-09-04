import CheckoutInfo from './CheckoutInfo';

const CheckoutTotal = () => {
  return (
    <div className="border-black-500 space-y-4 border-t-2 pt-4">
      <CheckoutInfo
        title="Total"
        value="$ 350,00"
        styles="text-xl text-white-100"
      />
      <span className="text-white-100 tablet:text-base block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-4 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-[.15s] ease-in">
        checkout
      </span>
    </div>
  );
};

export default CheckoutTotal;
