import InfoProduct from './InfoProduct';
import ImageProduct from './ImageProduct';
import QuantityProduct from '../../utils/QuantityProduct';
import TrashProduct from './TrashProduct';
import type { ProductProps } from '../../utils/useGlobalStorage';

const ProductCar = ({ product }: { product: ProductProps }) => {
  return (
    <article className="border-black-500 tablet:items-center flex gap-2 not-last:border-b-1 not-last:pb-4">
      <ImageProduct src={product.image} />
      <InfoProduct />

      <div className="tablet:flex-row tablet:gap-4 flex flex-col items-end justify-between">
        <QuantityProduct />
        <TrashProduct nameId={product.name} />
      </div>
    </article>
  );
};

export default ProductCar;
