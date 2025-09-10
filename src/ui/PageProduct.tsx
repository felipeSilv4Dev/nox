import ButtonBackPage from '../utils/ButtonBackPage';
import FooterQuantityAndPrice from '../features/pageProduct/FooterQuantityAndPrice';
import DetailsProduct from '../features/pageProduct/DetailsProduct';
import HeaderProduct from '../features/pageProduct/HeaderProduct';
import ImagesProduct from '../features/pageProduct/ImagesProduct';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import useGlobalStorage from '../utils/useGlobalStorage';
import ErrorMessage from '../utils/ErrorMessage';

const PageProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const storage = useGlobalStorage((state) => state);

  useEffect(() => {
    if (!slug) return;
    const product = storage.getProduct(slug);
    if (!product) return;
    storage.setProduct(product);
  }, [storage, slug]);

  if (!storage.product)
    return <ErrorMessage codeError={404} message="product not found" />;

  return (
    <section className="text-white-100 tablet:gap-x-8 tablet:grid tablet:grid-cols-2 col-span-full row-span-full px-4 font-['Assistant']">
      <div className="col-span-full">
        <ButtonBackPage />
      </div>

      <ImagesProduct />
      <div className="tablet:flex tablet:flex-col tablet:justify-between">
        <HeaderProduct />
        <DetailsProduct />
        <FooterQuantityAndPrice />
      </div>
    </section>
  );
};

export default PageProduct;
