import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface IconProps {
  children: ReactNode;
  styles?: string;
  to?: string;
}
const Icon = ({ children, styles = '', to = '' }: IconProps) => {
  const styleBase =
    'text-white-100 tablet:border-black-500 tablet:hover:bg-black-500 tablet:border-2 tablet:p-3  font-[Assistant] aspect-square font-semibold desktop-1:p-4 w-fit aria-[current=page]:text-white-100 tablet:aria-[current=page]:bg-black-500 text-white-600 relative';

  return (
    <NavLink to={to} className={`${styles} ${styleBase}`}>
      {children}
    </NavLink>
  );
};

export default Icon;
