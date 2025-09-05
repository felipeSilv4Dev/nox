import ButtonBackPage from '../utils/ButtonBackPage';
import QuantityProduct from '../utils/QuantityProduct';

const PageProduct = () => {
  return (
    <section className="text-white-100 tablet:gap-x-8 tablet:grid tablet:grid-cols-2 col-span-full row-span-full px-4 font-['Assistant']">
      <div className="col-span-full">
        <ButtonBackPage />
      </div>
      <div>
        <div className="bg-black-500 h-110 w-full"></div>
      </div>

      <div className="tablet:flex tablet:flex-col tablet:justify-between">
        <div className="tablet:m-0 mt-8">
          <span className="text-white-500 tablet:text-base text-sm uppercase">
            Brand
          </span>
          <h2 className='tablet:text-3xl font-["Bruno_Ace"] text-[26px] uppercase'>
            Axiom
          </h2>
          <p className="text-black-100 tablet:text-[18px] text-base font-semibold capitalize">
            Model AT30-SE
          </p>
        </div>

        <div className="tablet:space-y-1 tablet:mt-0 mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold uppercase">MOVEMENT</h3>{' '}
            <p className="text-black-100 text-sm font-semibold capitalize">
              Eco-Drive H54
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold uppercase">CASE SIZE</h3>{' '}
            <p className="text-black-100 text-sm font-semibold capitalize">
              45MM
            </p>
          </div>
        </div>
        <div className="tablet:mt-0 mt-8 flex flex-wrap-reverse items-center justify-between gap-y-4">
          <div className="w-full space-y-3">
            <span className="text-white-100 tablet:text-sm tablet:w-1/2 tablet:hover:from-blue-500 tablet:hover:to-blue-700 block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-4 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-75 ease-linear">
              add to car
            </span>
          </div>

          <h2 className="text-2xl font-bold uppercase">$ 350.00</h2>
          <div className="space-y-1">
            <h2 className="text-white-700 tablet:text-base text-end text-sm font-bold capitalize">
              quantity
            </h2>
            <QuantityProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageProduct;
