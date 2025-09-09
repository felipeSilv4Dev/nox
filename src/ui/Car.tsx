import { useState } from 'react';
import EmptyCar from '../features/car/EmptyCar';
import HeaderCar from '../features/car/HeaderCar';
import useGlobalStorage from '../utils/useGlobalStorage';
import Checkout from '../features/car/Checkout';
import ProductCar from '../features/car/ProductCar';

const Car = () => {
  const storage = useGlobalStorage((state) => state);
  const products = storage.getAllProductsCar();

  const [productsCar] = useState(() => {
    return products && products.length > 0 ? products : null;
  });

  return (
    <section className="desktop-1:grid desktop-1:grid-cols-[1fr_440px] col-span-full font-['Assistant'] text-white">
      <HeaderCar />
      {!productsCar && <EmptyCar />}

      {productsCar && (
        <>
          <div className="tablet:pb-20 tablet:max-h-[calc(40vh)] desktop-1:max-h-[calc(60vh)] desktop-1:col-1 max-h-[calc(35vh)] space-y-4 overflow-y-scroll mask-b-from-80% px-4 pt-4 pb-12">
            {productsCar.map((product) => (
              <ProductCar key={product.name} product={product} />
            ))}
          </div>
          <Checkout />
        </>
      )}
    </section>
  );
};

export default Car;
