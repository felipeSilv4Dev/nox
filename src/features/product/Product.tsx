import InfoProduct from '../discovery/products/InfoProduct';
import ButtonsProduct from './ButtonsProduct';
import ImageProduct from './ImageProduct';
import ReviewProduct from './ReviewProduct';

const Product = () => {
  return (
    <article className="flex h-fit w-full flex-col justify-between gap-3">
      <ImageProduct />
      <ReviewProduct />

      <InfoProduct />
      <ButtonsProduct />
    </article>
  );
};

export default Product;
