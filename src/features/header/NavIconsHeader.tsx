import * as FeatherIcon from 'feather-icons-react';
import Icon from './Icon';
import MenuMobileHeader from './MenuMobileHeader';
import InputSearch from './InputSearch';

const NavIconsHeader = () => {
  return (
    <ul className="desktop-2:gap-6 flex items-center justify-center gap-4">
      <div className="tablet:block hidden">
        <InputSearch />
      </div>

      <Icon>
        <FeatherIcon.ShoppingCart className="min-desktop-3:h-[36px] min-desktop-3:w-[36px] h-6" />
      </Icon>

      <MenuMobileHeader />

      <Icon styles="tablet:inline hidden">
        <FeatherIcon.User className="min-desktop-3:h-[36px] min-desktop-3:w-[36px]" />
      </Icon>
    </ul>
  );
};

export default NavIconsHeader;
