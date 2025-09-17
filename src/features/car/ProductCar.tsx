import InfoProduct from './InfoProduct';
import ImageProduct from './ImageProduct';
import QuantityProduct from '../../utils/QuantityProduct';
import TrashProduct from './TrashProduct';
import type { ProductProps } from '../../utils/useGlobalStorage';
import useGlobalStorage from '../../utils/useGlobalStorage';
import { handleRemoveFromCar } from '../../services/car/ProductCar';
import { NavLink } from 'react-router';

interface ProductCar {
  product: ProductProps;
}

const ProductCar = ({ product }: ProductCar) => {
  const storage = useGlobalStorage((state) => state);

  return (
    <NavLink
      to={`/product/${product.slug}`}
      className="border-black-500 tablet:items-center hover:bg-black-400/10 tablet:p-4 flex gap-2 transition-all duration-75 ease-linear not-last:border-b-1 not-last:pb-4"
    >
      <ImageProduct {...product} />
      <InfoProduct {...product} />

      <div className="tablet:flex-row tablet:gap-4 flex flex-col items-end justify-between">
        <QuantityProduct product={product} />
        <TrashProduct
          onRemove={() => handleRemoveFromCar({ product, storage })}
        />
      </div>
    </NavLink>
  );
};

export default ProductCar;
