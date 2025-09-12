import ButtonBackPage from '../utils/ButtonBackPage';
import FooterQuantityAndPrice from '../features/pageProduct/FooterQuantityAndPrice';
import DetailsProduct from '../features/pageProduct/DetailsProduct';
import HeaderProduct from '../features/pageProduct/HeaderProduct';
import ImagesProduct from '../features/pageProduct/ImagesProduct';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useGlobalStorage from '../utils/useGlobalStorage';
import { Loader } from 'feather-icons-react';
import useToTop from '../utils/useToTop';
// import Loader from '../utils/Loader';

const PageProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getProduct, setProduct } = useGlobalStorage((state) => state);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const product = getProduct(slug ? slug : '');
    if (!product) return setError(true);
    setProduct(product);
    setIsLoading(false);
  }, [slug, setProduct, getProduct]);

  useToTop();

  if (error) {
    throw new Response('', {
      status: 404,
      statusText: 'product not Found!',
    });
  }
  if (isLoading) return <Loader />;
  if (!error)
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
