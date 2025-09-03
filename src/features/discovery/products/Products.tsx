import ContainerProducts from './ContainerProducts';
import HeaderProducts from './HeaderProducts';

const Products = () => {
  return (
    <section className="tablet:p-0 tablet:mt-16 z-1 col-span-full my-12 space-y-4 p-4">
      <HeaderProducts />
      <ContainerProducts />
    </section>
  );
};

export default Products;
