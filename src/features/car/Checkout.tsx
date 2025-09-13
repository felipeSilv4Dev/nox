import { useEffect, useState } from 'react';
import useGlobalStorage from '../../utils/useGlobalStorage';
import CheckoutInfo from './CheckoutInfo';
import CheckoutTotal from './CheckoutTotal';
import { handleSetValueTotal } from '../../services/car/checkout';

const Checkout = () => {
  const { productsInCar, quantityPerProduct } = useGlobalStorage();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (productsInCar && quantityPerProduct) {
      handleSetValueTotal({ setTotal, quantityPerProduct, productsInCar });
    }
  }, [setTotal, productsInCar, quantityPerProduct]);

  return (
    <div className="bg-black-700 desktop-1:m-0 desktop-1:flex desktop-1:flex-col desktop-1:justify-between mt-8 space-y-8 px-4 py-8">
      <h2 className='border-black-500 tablet:text-xl border-b-2 pb-4 font-["Bruno_Ace"]'>
        cart totals
      </h2>

      <div className="space-y-2">
        <CheckoutInfo
          title="Sub Total"
          value={`${total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
        />
        <CheckoutInfo title="Discount" value="0%" />
      </div>

      <CheckoutTotal total={total} />
    </div>
  );
};

export default Checkout;
