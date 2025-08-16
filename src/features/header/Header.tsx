import { NavLink } from 'react-router-dom';
import * as Icon from 'feather-icons-react';

const Header = () => {
  return (
    <header className="z-1 col-span-full row-end-1 flex h-fit w-full items-center justify-between">
      <NavLink
        to={'/'}
        className="text-white-100 min-desktop-3:text-[48px] tablet:text-2xl desktop-2:text-3xl font-[Bruno_Ace]"
      >
        NOX
      </NavLink>

      <nav>
        <ul className="*:tablet:text-x *:hover:text-white-100 *:text-white-500 *:min-desktop-3:text-[36px] *:desktop-1:text-[18px] desktop-2:space-x-6 *:desktop-2:text-xl space-x-4 *:font-[Assistant] *:font-semibold *:transition-all *:duration-200">
          <NavLink to={'/'}>Discovery</NavLink>
          <NavLink to={'/collection'}>Collection</NavLink>
        </ul>
      </nav>

      <div className="*:text-white-100 *:tablet:border-black-500 *:tablet:hover:bg-black-500 *:min-desktop-3:p-[24px] *:tablet:border-2 *:tablet:p-3 desktop-2:gap-6 *:desktop-2:p-4 *:desktop-2:text-xl flex gap-4 *:rounded-full *:font-[Assistant] *:font-semibold xl:text-[18px]">
        <NavLink className="tablet:inline hidden" to={''}>
          <Icon.Search className="min-desktop-3:h-[36px] min-desktop-3:w-[36px]" />
        </NavLink>
        <NavLink to={''}>
          <Icon.ShoppingCart className="min-desktop-3:h-[36px] min-desktop-3:w-[36px]" />
        </NavLink>
        <NavLink to={''} className="tablet:hidden mobile-1:inline">
          <Icon.Menu />
        </NavLink>
        <NavLink to={''} className="tablet:inline hidden">
          <Icon.User className="min-desktop-3:h-[36px] min-desktop-3:w-[36px]" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
