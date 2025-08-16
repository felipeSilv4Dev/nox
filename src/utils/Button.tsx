import { type ReactNode } from 'react';
import { NavLink } from 'react-router';

interface ButtonProps {
  children: ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <NavLink
      to=""
      className="text-white-100 absolute inline bg-linear-to-l from-blue-800 to-blue-600 px-[6.4rem] py-4 font-['Bruno_Ace'] text-2xl shadow-[0_8px_32px_rgba(77,101,220,.6)] transition-all duration-[.15s] ease-in hover:active:translate-y-0 hover:md:-translate-y-[2px] hover:md:shadow-[0_4px_24px_rgba(77,101,220,.6)]"
    >
      {children}
    </NavLink>
  );
};

export default Button;
