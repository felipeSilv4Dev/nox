import * as FeatherIcon from 'feather-icons-react';
import useGlobalStorage from '../../utils/useGlobalStorage';
const HeaderProduct = () => {
  const stars = Array.from({ length: 5 });
  const { product } = useGlobalStorage((state) => state);
  if (!product) return <></>;
  return (
    <div className="tablet:m-0 mt-8">
      <span className="text-white-500 tablet:text-base text-sm uppercase">
        {product.brand}
      </span>
      <h2 className='tablet:text-3xl font-["Bruno_Ace"] text-[26px] uppercase'>
        {product.name}
      </h2>
      <p className="text-black-100 tablet:text-[18px] text-base font-semibold capitalize">
        Model {product.model}
      </p>
      <div className="flex items-center">
        {stars.map((_, index) => (
          <FeatherIcon.Star
            key={index}
            className={`h-4 ${index < product.review ? 'text-blue-400' : 'text-black-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderProduct;
