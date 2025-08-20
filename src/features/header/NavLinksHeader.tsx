import { NavLink } from 'react-router';
import MenuNavHeader from './MenuNavHeader';

const stylesLink =
  '*:desktop-1:inline *:hover:text-white-100 *:min-desktop-3:text-[36px] *:desktop-1:text-[18px] desktop-2:space-x-6 *:desktop-2:text-xl space-x-4 *:font-[Assistant] *:font-semibold *:transition-all *:duration-200 *:text-white-600';

const NavLinksHeader = () => {
  const styleActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-white-100 hidden' : 'text-white-600 hidden';

  return (
    <nav>
      <ul className={stylesLink}>
        <MenuNavHeader />
        <NavLink className={styleActive} to={'/'}>
          Discovery
        </NavLink>
        <NavLink className={styleActive} to={'/collection'}>
          Collection
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavLinksHeader;
