import { useState } from 'react';
import {
  handleAddCar,
  handleRemoveFromCar,
  handleSetStateButton,
} from '../../services/products/ButtonsProductService';
import QuantityProduct from '../../utils/QuantityProduct';
import useGlobalStorage from '../../utils/useGlobalStorage';

const FooterQuantityAndPrice = () => {
  const product = useGlobalStorage((state) => state.product);
  const storage = useGlobalStorage((state) => state);
  const [button, setButton] = useState(
    handleSetStateButton({ storage, product }),
  );
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
        <QuantityProduct product={product} />
      </div>
      {!button && (
        <span
          onClick={(e) => handleAddCar({ e, setButton, storage, product })}
          className="text-white-100 tablet:w-1/2 tablet:hover:from-blue-500 tablet:hover:to-blue-700 block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-4 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-75 ease-linear"
        >
          add to car
        </span>
      )}

      {button && (
        <span
          onClick={(e) =>
            handleRemoveFromCar({ e, setButton, storage, product })
          }
          className="text-black-900 tablet:w-1/2 block w-full cursor-pointer bg-red-400 py-4 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-75 ease-linear hover:bg-red-300"
        >
          remove from car
        </span>
      )}
    </div>
  );
};

export default FooterQuantityAndPrice;
