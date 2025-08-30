import type { ReactNode } from 'react';

const IconBenefit = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <div className="bg-black-800 relative z-1 p-4">{children}</div>
      <span className="absolute top-1/2 left-1/2 z-0 block h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2 bg-conic-45 from-[rgb(247,249,255,1)] to-[rgba(6,6,11,.5)]" />
    </div>
  );
};

export default IconBenefit;
