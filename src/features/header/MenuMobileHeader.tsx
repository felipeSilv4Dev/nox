import { NavLink } from 'react-router';

const MenuMobileHeader = () => {
  return (
    <div>
      <NavLink to="/" className={'active:bg-amber-400'}>
        Discovery
      </NavLink>
    </div>
  );
};

export default MenuMobileHeader;
