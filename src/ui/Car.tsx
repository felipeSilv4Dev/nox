import EmptyCar from '../features/car/EmptyCar';
import HeaderCar from '../features/car/HeaderCar';
import useGlobalStorage from '../utils/useGlobalStorage';
import Checkout from '../features/car/Checkout';
import ProductCar from '../features/car/ProductCar';
import useToTop from '../utils/useToTop';
import { useEffect } from 'react';
import { handleSetProductsCar } from '../services/car/ProductCar';

const Car = () => {
  const { productsInCar } = useGlobalStorage((state) => state);
  const { getAllProductsCar, setProducstInCar } = useGlobalStorage(
    (state) => state,
  );

  useEffect(() => {
    handleSetProductsCar({
      getAllProductsCar,
      setProducstInCar,
    });
  }, [getAllProductsCar, setProducstInCar]);

  useToTop();

  return (
    <section className="text-white-100 col-span-full row-span-full font-['Assistant']">
      <HeaderCar />
      {!productsInCar && <EmptyCar />}

      {productsInCar && (
        <div className="desktop-1:grid desktop-1:grid-cols-[1fr_440px] relative z-2 col-span-full">
          <div className="tablet:pb-20 tablet:max-h-[calc(40vh)] desktop-1:max-h-[calc(60vh)] desktop-1:col-1 max-h-[calc(35vh)] space-y-4 overflow-y-scroll mask-b-from-80% px-4 pt-4 pb-12">
            {productsInCar.map((product) => (
              <ProductCar key={product.name} product={product} />
            ))}
          </div>
          <Checkout />
          <div className="tablet:h-60 tablet:w-60 tablet:blur-[9rem] absolute top-1/2 -left-[30%] -z-1 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-600 blur-3xl"></div>
        </div>
      )}
    </section>
  );
};

export default Car;
