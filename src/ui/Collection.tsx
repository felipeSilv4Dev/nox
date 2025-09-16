import ContainerCollection from '../features/collection/ContainerCollection';
import HeaderCollection from '../features/collection/HeaderCollection';
import ButtonBackPage from '../utils/ButtonBackPage';
import useGlobalStorage from '../utils/useGlobalStorage';
import useToTop from '../utils/useToTop';

const Collection = () => {
  const products = useGlobalStorage((state) => state.products);
  useToTop();
  const sortReview = [...products].sort((a, b) => a.review - b.review);
  const sortReverse = [...products].reverse();

  return (
    <section className="text-white-100 col-span-full row-span-full px-4 font-['Assistant']">
      <ButtonBackPage />
      <div className="space-y-8">
        <HeaderCollection />

        <ContainerCollection products={products} />
        <ContainerCollection products={sortReverse} />
        <ContainerCollection products={sortReview} />
      </div>
    </section>
  );
};

export default Collection;
