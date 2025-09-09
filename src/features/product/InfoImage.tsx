import type { ProductProps } from '../../utils/useGlobalStorage';

const InfoImage = ({ product }: { product: ProductProps }) => {
  return (
    <div className="absolute bottom-4 left-4">
      <h2 className='text-white-100 font-["Bruno_Ace"] text-sm uppercase'>
        {product.name}
      </h2>
      <div className="space-x-3">
        <span className="text-white-100 font-['Assistant']">
          {product.price}
        </span>
        <span className="text-white-800 font-['Assistant'] line-through">
          {product.oldPrice}
        </span>
      </div>
    </div>
  );
};

export default InfoImage;
