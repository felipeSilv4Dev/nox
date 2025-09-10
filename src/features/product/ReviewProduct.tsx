import * as FeatherIcon from 'feather-icons-react';
import type { ProductProps } from '../../utils/useGlobalStorage';

const ReviewProduct = ({ product }: { product: ProductProps }) => {
  const stars = Array.from({ length: 5 });

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {stars.map((_, index) => (
          <FeatherIcon.Star
            key={index}
            className={`h-4 ${index < product.review ? 'text-blue-400' : 'text-black-300'}`}
          />
        ))}
      </div>

      <h3 className="text-white-100 font-['Assistant'] text-xs font-bold uppercase">
        {product.brand}
      </h3>
    </div>
  );
};

export default ReviewProduct;
