import { type ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  size: string;
  w: string;
}
const Title = ({ children, w = 'w-full', size }: TitleProps) => {
  return (
    <h1
      className={`${w} ${size} to-white-100 mt-[16%] mb-[6.4rem] bg-linear-to-b from-blue-100 bg-clip-text font-['Bruno_Ace'] text-transparent`}
    >
      {children}
    </h1>
  );
};

export default Title;
