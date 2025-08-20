import { NavLink } from 'react-router';

const LogoHeader = () => {
  return (
    <NavLink
      to={'/'}
      className="text-white-100 min-desktop-3:text-[48px] tablet:text-2xl desktop-2:text-3xl z-2 font-[Bruno_Ace] uppercase"
    >
      Nox
    </NavLink>
  );
};

export default LogoHeader;
