import { type ProductProps } from '../../utils/useGlobalStorage';

const ImageProduct = (product: ProductProps) => {
  return (
    <div
      style={{ backgroundImage: `url('${product.image}')` }}
      className={`tablet:h-30 tablet:w-30 h-20 w-20 bg-cover bg-center bg-no-repeat`}
    />
  );
};

export default ImageProduct;
