import { type ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return (
    <h1
      className={
        'to-white-100 min-desktop-3:text-[64px] desktop-1:text-4xl desktop-2:text-5xl tablet:text-3xl tablet:w-[16ch] tablet:text-left tablet:mb-[6.4rem] mb-[4.4rem] w-full bg-linear-to-b from-blue-100 bg-clip-text text-center font-["Bruno_Ace"] text-xl text-transparent'
      }
    >
      {children}
    </h1>
  );
};

export default Title;
