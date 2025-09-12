import { useState } from 'react';
import EmptyCar from '../features/car/EmptyCar';
import HeaderCar from '../features/car/HeaderCar';
import useGlobalStorage from '../utils/useGlobalStorage';
import Checkout from '../features/car/Checkout';
import ProductCar from '../features/car/ProductCar';
import useToTop from '../utils/useToTop';

const Car = () => {
  const storage = useGlobalStorage((state) => state);
  const products = storage.getAllProductsCar();

  const [productsCar, setProductsCar] = useState(() => {
    return products && products.length > 0 ? products : null;
  });

  useToTop();

  return (
    <section className="desktop-1:grid desktop-1:grid-cols-[1fr_440px] text-white-100 col-span-full font-['Assistant']">
      <HeaderCar />
      {!productsCar && <EmptyCar />}

      {productsCar && (
        <>
          <div className="tablet:pb-20 tablet:max-h-[calc(40vh)] desktop-1:max-h-[calc(60vh)] desktop-1:col-1 max-h-[calc(35vh)] space-y-4 overflow-y-scroll mask-b-from-80% px-4 pt-4 pb-12">
            {productsCar.map((product) => (
              <ProductCar
                key={product.name}
                product={product}
                setProductsCar={setProductsCar}
              />
            ))}
          </div>
          <Checkout />
        </>
      )}
    </section>
  );
};

export default Car;
