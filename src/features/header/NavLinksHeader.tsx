import { NavLink } from 'react-router';
import MenuNavHeader from './MenuNavHeader';

const NavLinksHeader = () => {
  return (
    <nav>
      <ul className={'desktop-1:gap-6 flex items-center justify-center gap-4'}>
        <MenuNavHeader />
        <NavLink
          to={'/'}
          className={`aria-[current=page]:text-white-100 text-white-600 desktop-1:block desktop-1:text-[18px] hover:text-white-100 desktop-2:text-xl hidden font-[Assistant] font-semibold transition-all duration-200`}
        >
          Discovery
        </NavLink>

        <NavLink
          to={'/collection'}
          className={`aria-[current=page]:text-white-100 text-white-600 desktop-1:block desktop-1:text-[18px] hover:text-white-100 desktop-2:text-xl hidden font-[Assistant] font-semibold transition-all duration-200`}
        >
          Collection
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavLinksHeader;
