import { NavLink } from 'react-router';

const LogoHeader = () => {
  return (
    <NavLink
      to={'/'}
      className="text-white-100 tablet:text-2xl desktop-2:text-3xl font-[Bruno_Ace] uppercase"
    >
      Nox
    </NavLink>
  );
};

export default LogoHeader;
