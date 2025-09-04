import * as FeatherIcon from 'feather-icons-react';
import FlipNumbers from 'react-flip-numbers';
import IconQuantityProduct from './IconQuantityProduct';

const QuantityProduct = () => {
  return (
    <div className="flex">
      <IconQuantityProduct>
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
          numbers="1"
        />
      </div>

      <IconQuantityProduct>
        <FeatherIcon.ChevronDown className="tablet:h-6 tablet:w-6 h-4 w-4" />
      </IconQuantityProduct>
    </div>
  );
};

export default QuantityProduct;
