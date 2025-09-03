import * as FeatherIcon from 'feather-icons-react';
import FlipNumbers from 'react-flip-numbers';
import IconQuantityProduct from './IconQuantityProduct';

const QuantityProduct = () => {
  return (
    <div className="flex h-fit items-stretch">
      <IconQuantityProduct>
        <FeatherIcon.ChevronUp className="h-4 w-4" />
      </IconQuantityProduct>

      <div className="border-black-500 border-y-1 p-2">
        <FlipNumbers
          height={14}
          width={14}
          color=""
          numberStyle={{
            textAlign: 'center',
            fontSize: '16px',
            color: 'var(--color-white-100)',
          }}
          play
          perspective={100}
          numbers="1"
        />
      </div>

      <IconQuantityProduct>
        <FeatherIcon.ChevronDown className="h-4 w-4" />
      </IconQuantityProduct>
    </div>
  );
};

export default QuantityProduct;
