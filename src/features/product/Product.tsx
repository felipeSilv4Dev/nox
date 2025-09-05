import { Link } from 'react-router';
import InfoProduct from '../discovery/products/InfoProduct';
import ButtonsProduct from './ButtonsProduct';
import ImageProduct from './ImageProduct';
import ReviewProduct from './ReviewProduct';

const Product = () => {
  return (
    <Link
      to={'/product/name-product'}
      className="flex h-fit w-full cursor-pointer flex-col justify-between gap-3"
    >
      <ImageProduct />
      <ReviewProduct />

      <InfoProduct />
      <ButtonsProduct />
    </Link>
  );
};

export default Product;
