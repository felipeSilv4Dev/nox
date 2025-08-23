import { NavLink } from 'react-router';
import MenuNavHeader from './MenuNavHeader';

interface isActiveProps {
  isActive: boolean;
}
const NavLinksHeader = () => {
  return (
    <nav>
      <ul className={'desktop-1:gap-6 flex items-center justify-center gap-4'}>
        <MenuNavHeader />
        <NavLink
          to={'/'}
          className={`desktop-1:block desktop-1:text-[18px] hover:text-white-100 desktop-2:text-xl text-white-600 hidden font-[Assistant] font-semibold transition-all duration-200 ${({
            isActive,
          }: isActiveProps) => (isActive ? 'text-white-100' : '')}`}
        >
          Discovery
        </NavLink>

        <NavLink
          to={'/collection'}
          className={`desktop-1:block desktop-1:text-[18px] hover:text-white-100 desktop-2:text-xl text-white-600 hidden font-[Assistant] font-semibold transition-all duration-200 ${({
            isActive,
          }: isActiveProps) => (isActive ? 'text-white-100 hidden' : '')}`}
        >
          Collection
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavLinksHeader;
