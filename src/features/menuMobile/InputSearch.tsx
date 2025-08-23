import * as FeatherIcon from 'feather-icons-react';
import useGlobalStorage from '../../utils/useGlobalStorage';

const InputSearch = () => {
  const open = useGlobalStorage((state) => state.open);

  return (
    <label
      htmlFor="search"
      className={`bg-black-500 text-white-100 border-black-500 flex h-fit items-center border-2 px-3 has-[input:focus]:border-blue-400 ${open ? 'animate-intro' : ''}`}
    >
      <input
        id="search"
        type="text"
        placeholder="Search Product"
        autoComplete="off"
        className="h-full w-full bg-transparent py-4 font-[Assistant] text-[16px] placeholder:font-[Assistant] focus:outline-none"
      />
      <FeatherIcon.Search className="inline" />
    </label>
  );
};
export default InputSearch;
