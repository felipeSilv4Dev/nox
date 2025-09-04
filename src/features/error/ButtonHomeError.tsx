import { NavLink } from 'react-router';

const ButtonHomeError = () => {
  return (
    <NavLink
      className={
        'tablet:hover:text-blue-200 tablet:text-xl font-bold text-blue-500 capitalize transition-all duration-75 ease-linear'
      }
      to={'/'}
    >
      back to Home
    </NavLink>
  );
};

export default ButtonHomeError;
