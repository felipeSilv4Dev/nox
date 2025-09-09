import * as FeatherIcon from 'feather-icons-react';
import FlipNumbers from 'react-flip-numbers';
import IconQuantityProduct from './IconQuantityProduct';
import useGlobalStorage from './useGlobalStorage';
import { useState } from 'react';

const QuantityProduct = () => {
  const { setQuantity, quantityProduct } = useGlobalStorage((state) => state);
  const [product, setProduct] = useState(() => {
    const product = quantityProduct('product-1');
    if (!product) return 1;
    const { quantity } = product;
    return quantity;
  });

  function handleDecrementQuantity() {
    const numberQuantity = product > 1 ? product - 1 : 1;

    setQuantity({
      nameId: 'product-1',
      quantity: numberQuantity,
    });
    setProduct(numberQuantity);
  }

  function handleIncrementQuantity() {
    const numberQuantity = product + 1;
    setQuantity({
      nameId: 'product-1',
      quantity: numberQuantity,
    });
    setProduct(numberQuantity);
  }

  return (
    <div className="flex">
      <IconQuantityProduct onClick={handleIncrementQuantity}>
        <FeatherIcon.ChevronUp className="tablet:h-6 tablet:w-6 h-4 w-4" />
      </IconQuantityProduct>

      <div className="border-black-500 flex h-fit w-fit items-center justify-center border-y-1 p-2">
        <FlipNumbers
          height={window.innerWidth >= 1024 ? 40 : 16}
          width={window.innerWidth >= 1024 ? 40 : 16}
          color=""
          numberStyle={{
            textAlign: 'center',
            fontSize: window.innerWidth >= 1024 ? '8px' : '12px',
            color: 'var(--color-white-100)',
          }}
          play
          perspective={100}
          numbers={String(product)}
        />
      </div>

      <IconQuantityProduct onClick={handleDecrementQuantity}>
        <FeatherIcon.ChevronDown className="tablet:h-6 tablet:w-6 h-4 w-4" />
      </IconQuantityProduct>
    </div>
  );
};

export default QuantityProduct;
