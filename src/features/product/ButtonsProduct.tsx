import { useState } from 'react';
import type { ProductProps } from '../../utils/useGlobalStorage';
import useGlobalStorage from '../../utils/useGlobalStorage';
import {
  handleAddCar,
  handleRemoveFromCar,
  handleSetStateButton,
} from '../../services/products/ButtonsProductService';

const ButtonsProduct = ({ product }: { product: ProductProps }) => {
  const storage = useGlobalStorage((state) => state);
  const [button, setButton] = useState(() =>
    handleSetStateButton({ product, storage }),
  );

  return (
    <div className="grid gap-2">
      {!button && (
        <span
          onClick={(e) => handleAddCar({ e, product, storage, setButton })}
          className="text-white-100 tablet:hover:from-blue-500 tablet:hover:to-blue-700 block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-3 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-[.15s] ease-linear"
        >
          add to car
        </span>
      )}
      {button && (
        <span
          onClick={(e) =>
            handleRemoveFromCar({ e, product, storage, setButton })
          }
          className="text-black-900 block w-full cursor-pointer bg-red-400 py-[14px] text-center font-['Bruno_Ace'] text-xs uppercase transition-all duration-[.15s] ease-linear hover:bg-red-300"
        >
          remove from car
        </span>
      )}

      <span className="text-white-100 bg-black-600 tablet:hover:bg-black-400 block w-full cursor-pointer py-3 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-[.15s] ease-in">
        details
      </span>
    </div>
  );
};

export default ButtonsProduct;
