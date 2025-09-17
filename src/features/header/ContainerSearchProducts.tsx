import useGlobalStorage from '../../utils/useGlobalStorage';
import Product from '../menuMobile/Product';

const ContainerSearchProducts = () => {
  const { products, searchProduct } = useGlobalStorage((state) => state);

  const productsSearch = products.filter((product) =>
    searchProduct !== ' '
      ? product.name
          .toLocaleLowerCase()
          .includes(searchProduct.toLocaleLowerCase())
      : false,
  );

  const intialInfo = (
    <p
      onClick={(e) => e.preventDefault()}
      className="text-white-700 bg-black-800 absolute top-16 left-0 mt-4 hidden h-fit w-full cursor-default p-4 text-center font-[Assistant] text-base peer-focus:block"
    >
      Found Some Product
    </p>
  );

  return searchProduct.length && productsSearch.length ? (
    <ul
      onClick={(e) => e.preventDefault()}
      className="bg-black-600 absolute top-20 left-0 z-1 hidden h-fit max-h-[50vh] w-full cursor-default flex-col gap-2 overflow-y-scroll px-4 pt-6 pb-4 peer-focus:flex"
    >
      {productsSearch.map((product) => (
        <Product key={product.slug} product={product} />
      ))}
    </ul>
  ) : (
    intialInfo
  );
};

export default ContainerSearchProducts;
