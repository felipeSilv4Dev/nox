import * as FeatherIcon from 'feather-icons-react';
import Icon from './Icon';
import InputSearch from './InputSearch';
import MenuMobile from '../menuMobile/MenuMobile';
import useGlobalStorage from '../../utils/useGlobalStorage';
import { useEffect } from 'react';
import { handleSetProductsCar } from '../../services/car/ProductCar';

const NavIconsHeader = () => {
  const { productsInCar, setProducstInCar, getAllProductsCar } =
    useGlobalStorage((state) => state);

  useEffect(() => {
    handleSetProductsCar({
      getAllProductsCar,
      setProducstInCar,
    });
  }, [getAllProductsCar, setProducstInCar]);

  return (
    <ul className="desktop-2:gap-6 flex items-center justify-center gap-4">
      <div className="tablet:block hidden">
        <InputSearch />
      </div>

      <Icon to="/car">
        <FeatherIcon.ShoppingCart></FeatherIcon.ShoppingCart>
        {productsInCar && (
          <span className="bg-black-400 tablet:top-0 tablet:right-0 absolute -top-2 -right-2 z-1 block h-4 w-4 text-center text-xs">
            {productsInCar.length}
          </span>
        )}
      </Icon>

      <MenuMobile />
    </ul>
  );
};

export default NavIconsHeader;
