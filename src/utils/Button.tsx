import { type ReactNode } from 'react';
import { NavLink } from 'react-router';

interface ButtonProps {
  children: ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <NavLink
      to=""
      className="text-white-100 desktop-2:px-[6rem] desktop-2:py-3 desktop-2:text-2xl hover:tablet:-translate-y-[2px] hover:tablet:shadow-[0_4px_24px_rgba(77,101,220,.6)] inline-block w-fit bg-linear-to-l from-blue-800 to-blue-600 px-[4.6rem] py-2 text-center font-['Bruno_Ace'] shadow-[0_8px_32px_rgba(77,101,220,.6)] transition-all duration-[.15s] ease-in hover:active:translate-y-0"
    >
      {children}
    </NavLink>
  );
};

export default Button;
