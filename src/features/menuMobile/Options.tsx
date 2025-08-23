import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import useGlobalStorage from '../../utils/useGlobalStorage';

interface OptionProps {
  children: ReactNode;
  to: string;
}

const Option = ({ children, ...props }: OptionProps) => {
  const open = useGlobalStorage((state) => state.open);

  return (
    <NavLink
      to={props.to}
      className={`text-white-500 bg-black-500 mobile-1:text-[16px] mobile-1:py-4 flex w-full items-center justify-between px-3 py-3 font-[Assistant] text-[14px] font-semibold capitalize opacity-0 ${open ? 'animate-intro' : ''}`}
    >
      {children}
    </NavLink>
  );
};

export default Option;
