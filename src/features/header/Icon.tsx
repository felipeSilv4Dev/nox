import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface IconProps {
  children: ReactNode;
  styles?: string;
}
const Icon = ({ children, styles = '' }: IconProps) => {
  const styleBase =
    'text-white-100 tablet:border-black-500 tablet:hover:bg-black-500 min-desktop-3:p-[24px] tablet:border-2 tablet:p-3 desktop-2:p-4 desktop-2:text-xl rounded-full font-[Assistant] font-semibold xl:text-[18px]';

  return (
    <NavLink to="" className={`${styles} ${styleBase}`}>
      {children}
    </NavLink>
  );
};

export default Icon;
