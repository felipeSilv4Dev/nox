import * as FeatherIcon from 'feather-icons-react';
import Icon from './Icon';
import InputSearch from './InputSearch';
import MenuMobile from '../menuMobile/MenuMobile';

const NavIconsHeader = () => {
  return (
    <ul className="desktop-2:gap-6 flex items-center justify-center gap-4">
      <div className="tablet:block hidden">
        <InputSearch />
      </div>

      <Icon to="/car">
        <FeatherIcon.ShoppingCart />
      </Icon>

      <MenuMobile />

      <Icon styles="tablet:inline hidden">
        <FeatherIcon.User />
      </Icon>
    </ul>
  );
};

export default NavIconsHeader;
