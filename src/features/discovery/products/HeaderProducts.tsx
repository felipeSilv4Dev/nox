import ControlNextProducts from './ControlNextProducts';

const HeaderProducts = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-white-100 desktop-1:text-4xl font-[Bruno_Ace] text-xl uppercase">
        modelos
      </h2>
      <ControlNextProducts />
    </div>
  );
};

export default HeaderProducts;
