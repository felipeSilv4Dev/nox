import InfoProduct from './InfoProduct';
import ImageProduct from './ImageProduct';
import QuantityProduct from '../../utils/QuantityProduct';
import TrashProduct from './TrashProduct';

const ProductCar = () => {
  return (
    <article className="border-black-500 flex gap-2 not-last:border-b-1 not-last:pb-4">
      <ImageProduct />
      <InfoProduct />

      <div className="flex flex-col items-end justify-between">
        <QuantityProduct />
        <TrashProduct />
      </div>
    </article>
  );
};

export default ProductCar;
