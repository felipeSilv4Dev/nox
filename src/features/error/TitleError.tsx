import type { ReactNode } from 'react';

const TitleError = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className='h-fit -translate-y-12 font-["Bruno_Ace"] text-7xl'>
      {children}
    </h1>
  );
};

export default TitleError;
