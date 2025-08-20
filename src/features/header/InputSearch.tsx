import { useState } from 'react';
import * as FeatherIcon from 'feather-icons-react';

const InputSearch = () => {
  const [search, setSearch] = useState(false);

  const handleOpenSearch:
    | React.MouseEventHandler<HTMLDivElement>
    | undefined = (e) => {
    e.preventDefault();
    setSearch((search) => !search);
  };

  return (
    <label
      htmlFor="found"
      className={`text-white-100 border-black-400 ${search ? 'bg-black-500 cursor-pointer' : 'border-transparent'} relative flex w-100 items-center border-2 pl-3 transition-all duration-75 ease-in has-[input:focus]:border-blue-400`}
    >
      <input
        id="found"
        type="text"
        placeholder="Search Product"
        autoComplete="off"
        className={`h-full w-full ${search ? 'visible' : 'invisible'} bg-transparent py-4 font-[Assistant] text-xl placeholder:font-[Assistant] placeholder:opacity-0 focus:outline-none`}
      />

      <div
        onClick={handleOpenSearch}
        className={`border-black-500 tablet:h-12 tablet:w-12 hover:bg-black-500 desktop-1:h-14 desktop-1:w-14 cursor-pointer border-2 ${search ? 'border-transparent' : ''} tablet:p-3 desktop-3:w-24 desktop-3:h-24 desktop-3:text-2xl flex aspect-square items-center justify-center p-4`}
      >
        <FeatherIcon.Search className={'desktop-3:h-9 block w-full'} />
      </div>
    </label>
  );
};

export default InputSearch;
