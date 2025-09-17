import { useState } from 'react';
import * as FeatherIcon from 'feather-icons-react';
import ContainerSearchProducts from './ContainerSearchProducts';
import useGlobalStorage from '../../utils/useGlobalStorage';

const InputSearch = () => {
  const [search, setSearch] = useState(false);
  const { searchProduct, setSearchProduct } = useGlobalStorage(
    (state) => state,
  );
  const handleOpenSearch:
    | React.MouseEventHandler<HTMLDivElement>
    | undefined = (e) => {
    e.preventDefault();
    setSearch((search) => !search);
  };

  return (
    <label
      htmlFor="found"
      className={`text-white-100 border-black-400 ${search ? 'bg-black-500/50 cursor-pointer' : 'border-transparent'} relative flex h-fit w-100 items-center border-2 pl-3 transition-all duration-75 ease-in has-[input:focus]:border-blue-400`}
    >
      <input
        id="found"
        type="text"
        placeholder="Search Product"
        value={searchProduct}
        autoComplete="off"
        onChange={(e) => setSearchProduct(e.target.value)}
        onBlur={(e) => e.target.focus()}
        className={`h-fit w-full ${search ? 'visible' : 'invisible'} peer bg-transparent py-4 font-[Assistant] text-xl placeholder:font-[Assistant] placeholder:opacity-0 focus:outline-none`}
      />

      <div
        onClick={handleOpenSearch}
        className={`border-black-500 hover:bg-black-500 cursor-pointer border-2 ${search ? 'border-transparent' : ''} desktop-1:p-4 flex w-fit items-center justify-center p-3`}
      >
        <FeatherIcon.Search />
      </div>

      <ContainerSearchProducts />
    </label>
  );
};

export default InputSearch;
