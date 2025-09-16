import type { ProductProps } from '../../utils/useGlobalStorage';

const Product = ({ product }: { product: ProductProps }) => {
  return (
    <li>
      <div className="border-black-500 relative -z-1 flex items-start gap-3 border-b-2 pb-2">
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
      </div>
    </li>
  );
};

export default Product;
