import IconBenefit from './IconBenefit';
import type { ReactNode } from 'react';

interface BenefitProps {
  title: string;
  list: string[];
  children: ReactNode;
}
const Benefit = ({ title, list, children }: BenefitProps) => {
  return (
    <article className="flex w-full items-center gap-8 p-3 py-2">
      <IconBenefit>{children}</IconBenefit>

      <div className="space-y-2">
        <h2 className="text-white-100 tablet:text-[18px] text-base font-bold uppercase">
          {title}
        </h2>
        <ul className="list-disc">
          {list.map((li, index) => (
            <li
              key={index}
              className="text-black-200 tablet:text-sm text-xs font-semibold"
            >
              {li}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Benefit;
