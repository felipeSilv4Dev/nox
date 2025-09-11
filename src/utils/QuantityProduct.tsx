import * as FeatherIcon from 'feather-icons-react';
import FlipNumbers from 'react-flip-numbers';
import IconQuantityProduct from './IconQuantityProduct';
import useGlobalStorage from './useGlobalStorage';
import { useState } from 'react';
import {
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleInitialState,
} from '../services/utils/QuantityServices';

const QuantityProduct = () => {
  const storage = useGlobalStorage((state) => state);
  const [count, setCount] = useState(() => handleInitialState(storage));

  return (
    <div className="flex">
      <IconQuantityProduct
        onClick={() => handleIncrementQuantity({ storage, count, setCount })}
      >
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
          numbers={String(count)}
        />
      </div>

      <IconQuantityProduct
        onClick={() => handleDecrementQuantity({ storage, count, setCount })}
      >
        <FeatherIcon.ChevronDown className="tablet:h-6 tablet:w-6 h-4 w-4" />
      </IconQuantityProduct>
    </div>
  );
};

export default QuantityProduct;
