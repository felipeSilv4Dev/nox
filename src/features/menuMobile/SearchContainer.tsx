import type { ReactNode } from 'react';
import ProductsContainer from './ProductsContainer';
import useGlobalStorage from '../../utils/useGlobalStorage';

interface SearchContainerProps {
  children: ReactNode;
  search: boolean;
}

const SearchContainer = ({ children, ...props }: SearchContainerProps) => {
  const open = useGlobalStorage((state) => state.open);

  return (
    <section
      className={`absolute w-full opacity-0 ${props.search ? 'visible block' : 'invisible hidden'} ${open ? 'animate-intro' : ''}`}
    >
      {children}
      <ProductsContainer />
    </section>
  );
};

export default SearchContainer;
