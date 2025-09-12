import InfoProduct from './InfoProduct';
import ImageProduct from './ImageProduct';
import QuantityProduct from '../../utils/QuantityProduct';
import TrashProduct from './TrashProduct';
import type { ProductProps } from '../../utils/useGlobalStorage';
import useGlobalStorage from '../../utils/useGlobalStorage';

interface ProductCar {
  product: ProductProps;
  setProductsCar: React.Dispatch<React.SetStateAction<ProductProps[] | null>>;
}

const ProductCar = ({ product, setProductsCar }: ProductCar) => {
  const storage = useGlobalStorage((state) => state);

  function handleSetProductsCar() {
    const products = storage.getAllProductsCar();
    setProductsCar(products && products.length > 0 ? products : null);
  }

  function handleRemoveFromCar() {
    storage.removeFromCar(product.name);
    handleSetProductsCar();
  }

  return (
    <article className="border-black-500 tablet:items-center flex gap-2 not-last:border-b-1 not-last:pb-4">
      <ImageProduct {...product} />
      <InfoProduct {...product} />

      <div className="tablet:flex-row tablet:gap-4 flex flex-col items-end justify-between">
        <QuantityProduct product={product} />
        <TrashProduct onRemove={handleRemoveFromCar} />
      </div>
    </article>
  );
};

export default ProductCar;
