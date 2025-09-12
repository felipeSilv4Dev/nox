import { type ProductProps } from '../../utils/useGlobalStorage';

const InfoProduct = (product: ProductProps) => {
  return (
    <div className="mr-auto">
      <h3 className='tablet:w-fit line-clamp-2 w-[30vw] font-["Bruno_Ace"] text-base text-nowrap text-ellipsis'>
        {product.name}
      </h3>
      <span className="text-black-200 tablet:text-sm text-xs font-semibold">
        Model {product.model}
      </span>
      <p className="text-white-100 text-sm font-bold">{product.price}</p>
    </div>
  );
};

export default InfoProduct;
