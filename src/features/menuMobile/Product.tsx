import { NavLink } from 'react-router';
import type { ProductProps } from '../../utils/useGlobalStorage';

const Product = ({ product }: { product: ProductProps }) => {
  return (
    <NavLink
      to={`/product/${product.slug}`}
      className="border-black-500 hover:bg-black-400/30 relative -z-1 flex items-start gap-3 p-2 transition-all duration-75 ease-linear not-last:border-b-2"
    >
      <div
        style={{ backgroundImage: `url('${product.image}')` }}
        className="h-20 w-20 bg-cover bg-center bg-no-repeat"
      ></div>

      <div>
        <h3 className="text-white-100 font-[Bruno_Ace]">{product.name}</h3>
        <span className="text-black-200 text-xs">Model {product.model}</span>
        <p className="text-white-100 font-[Assistant] font-bold">
          {product.price}
        </p>
      </div>
    </NavLink>
  );
};

export default Product;
