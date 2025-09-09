import { Link } from 'react-router';
import InfoProduct from '../discovery/products/InfoProduct';
import ButtonsProduct from './ButtonsProduct';
import ImageProduct from './ImageProduct';
import ReviewProduct from './ReviewProduct';
import type { ProductProps } from '../../utils/useGlobalStorage';
import InfoImage from './InfoImage';

const Product = ({ product }: { product: ProductProps }) => {
  return (
    <Link
      to={'/product/name-product'}
      className="flex h-fit w-full flex-2 cursor-pointer flex-col justify-between gap-3"
    >
      <ImageProduct src={product.image}>
        <InfoImage product={product} />
      </ImageProduct>
      <ReviewProduct product={product} />

      <InfoProduct>{product.details}</InfoProduct>
      <ButtonsProduct product={product} />
    </Link>
  );
};

export default Product;
