// import Checkout from '../features/car/Checkout';
import EmptyCar from '../features/car/EmptyCar';
import HeaderCar from '../features/car/HeaderCar';
// import ProductCar from '../features/car/ProductCar';

const Car = () => {
  return (
    <section className="desktop-1:grid desktop-1:grid-cols-[1fr_440px] col-span-full font-['Assistant'] text-white">
      <HeaderCar />
      <EmptyCar />

      {/* <div className="tablet:pb-20 tablet:max-h-[calc(40vh)] desktop-1:max-h-[calc(60vh)] desktop-1:col-1 max-h-[calc(35vh)] space-y-4 overflow-y-scroll mask-b-from-80% px-4 pt-4 pb-12">
        <ProductCar />
        <ProductCar />
        <ProductCar />
        <ProductCar />
      </div> */}
      {/* <Checkout /> */}
    </section>
  );
};

export default Car;
