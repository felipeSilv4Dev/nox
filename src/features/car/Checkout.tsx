import CheckoutInfo from './CheckoutInfo';
import CheckoutTotal from './CheckoutTotal';

const Checkout = () => {
  return (
    <div className="bg-black-700 desktop-1:m-0 desktop-1:flex desktop-1:flex-col desktop-1:justify-between mt-8 space-y-8 px-4 py-8">
      <h2 className='border-black-500 tablet:text-xl border-b-2 pb-4 font-["Bruno_Ace"]'>
        cart totals
      </h2>

      <div className="space-y-2">
        <CheckoutInfo title="Sub Total" value="$ 350,00" />
        <CheckoutInfo title="Discount" value="0,00%" />
      </div>

      <CheckoutTotal />
    </div>
  );
};

export default Checkout;
