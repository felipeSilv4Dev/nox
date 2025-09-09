import ButtonBackPage from '../utils/ButtonBackPage';
import FooterQuantityAndPrice from '../features/pageProduct/FooterQuantityAndPrice';
import DetailsProduct from '../features/pageProduct/DetailsProduct';
import HeaderProduct from '../features/pageProduct/HeaderProduct';
import ImagesProduct from '../features/pageProduct/ImagesProduct';

const PageProduct = () => {
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
