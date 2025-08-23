import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface IconProps {
  children: ReactNode;
  styles?: string;
}
const Icon = ({ children, styles = '' }: IconProps) => {
  const styleBase =
    'text-white-100 tablet:border-black-500 tablet:hover:bg-black-500 tablet:border-2 tablet:p-3  font-[Assistant] aspect-square font-semibold desktop-1:p-4 w-fit';

  return (
    <NavLink to="" className={`${styles} ${styleBase}`}>
      {children}
    </NavLink>
  );
};

export default Icon;
