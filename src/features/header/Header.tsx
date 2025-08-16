import { NavLink } from 'react-router-dom';
import * as Icon from 'feather-icons-react';

const Header = () => {
  return (
    <header className="z-1 col-span-full flex h-fit w-full items-center justify-between">
      <NavLink
        to={'/'}
        className="text-white-100 font-[Bruno_Ace] md:text-2xl 2xl:text-3xl"
      >
        NOX
      </NavLink>

      <nav>
        <ul className="*:md:text-x *:hover:text-white-100 *:text-white-500 space-x-4 *:font-[Assistant] *:font-semibold *:transition-all *:duration-200 *:xl:text-[18px] 2xl:space-x-6 *:2xl:text-xl">
          <NavLink to={'/'}>Discovery</NavLink>
          <NavLink to={'/collection'}>Collection</NavLink>
        </ul>
      </nav>

      <div className="*:text-white-100 *:md:border-black-500 *:md:hover:bg-black-500 flex space-x-4 *:rounded-full *:font-[Assistant] *:font-semibold *:md:border-2 *:md:p-3 xl:text-[18px] 2xl:space-x-6 *:2xl:p-4 *:2xl:text-xl">
        <NavLink className="hidden md:inline" to={''}>
          <Icon.Search />
        </NavLink>
        <NavLink to={''}>
          <Icon.ShoppingCart />
        </NavLink>
        <NavLink to={''} className="sm:inline md:hidden">
          <Icon.Menu />
        </NavLink>
        <NavLink to={''} className="hidden md:inline">
          <Icon.User />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
