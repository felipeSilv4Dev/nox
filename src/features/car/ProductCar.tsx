import InfoProduct from './InfoProduct';
import ImageProduct from './ImageProduct';
import QuantityProduct from '../../utils/QuantityProduct';
import TrashProduct from './TrashProduct';
import type { ProductProps } from '../../utils/useGlobalStorage';
import useGlobalStorage from '../../utils/useGlobalStorage';
import { handleRemoveFromCar } from '../../services/car/ProductCar';

interface ProductCar {
  product: ProductProps;
}

const ProductCar = ({ product }: ProductCar) => {
  const storage = useGlobalStorage((state) => state);

  return (
    <article className="border-black-500 tablet:items-center flex gap-2 not-last:border-b-1 not-last:pb-4">
      <ImageProduct {...product} />
      <InfoProduct {...product} />

      <div className="tablet:flex-row tablet:gap-4 flex flex-col items-end justify-between">
        <QuantityProduct product={product} />
        <TrashProduct
          onRemove={() => handleRemoveFromCar({ product, storage })}
        />
      </div>
    </article>
  );
};

export default ProductCar;
