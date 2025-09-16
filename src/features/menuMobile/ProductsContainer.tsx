import useGlobalStorage from '../../utils/useGlobalStorage';
import Product from './Product';

const ProductsContainer = () => {
  const { products, searchProduct } = useGlobalStorage((state) => state);

  const productsSearch = products.filter((product) =>
    product.name
      .toLocaleLowerCase()
      .includes(searchProduct.toLocaleLowerCase()),
  );

  const intialInfo = (
    <p className="mobile-1:text-xl text-white-700 mt-4 text-center font-[Assistant] text-sm">
      Found Some Product
    </p>
  );

  return searchProduct.length && productsSearch.length ? (
    <ul className="mobile-1:h-[60vh] relative mt-2 flex h-[50vh] w-full flex-col gap-2 overflow-y-scroll mask-b-from-90%">
      {productsSearch.map((product) => (
        <Product key={product.slug} product={product} />
      ))}
    </ul>
  ) : (
    intialInfo
  );
};

export default ProductsContainer;
