import { useSearchParams } from 'react-router';
import SearchContainer from './SearchContainer';
import ButtonBack from './ButtonBack';
import InputSearch from './InputSearch';
import Option from './Options';
import * as FeatherIcon from 'feather-icons-react';
import useGlobalStorage from '../../utils/useGlobalStorage';

const MenuOptions = () => {
  const open = useGlobalStorage((state) => state.open);

  const [searchParams] = useSearchParams();
  const params = searchParams.get('page');
  const search = params === 'search';

  return (
    <div
      className={`fixed top-0 right-0 z-2 h-full w-full origin-top-right transition-all duration-300 ease-in-out ${open ? 'scale-100' : 'scale-0'} bg-black-800 overflow-hidden`}
    >
      <div className="mobile-1:top-[24%] absolute top-[36%] left-[50%] flex h-full w-[82%] -translate-x-[50%] -translate-y-[50%] flex-col justify-start space-y-2 py-[50%]">
        <SearchContainer search={search}>
          <ButtonBack />
          <InputSearch />
        </SearchContainer>

        {!search && (
          <Option to="/?page=search">
            Search Product <FeatherIcon.ChevronRight className="inline" />
          </Option>
        )}
      </div>
    </div>
  );
};

export default MenuOptions;
