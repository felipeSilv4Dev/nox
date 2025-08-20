import { useState, type ReactNode } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router';
import * as FeatherIcon from 'feather-icons-react';

interface SearchContainerProps {
  children: ReactNode;
  open: boolean;
  search: boolean;
}
const MenuMobileHeader = () => {
  const [open, setOpen] = useState(true);
  const iconMenu = (
    <div
      className={`relative h-[2px] w-8 bg-blue-100 transition-all duration-200 ease-linear before:absolute before:top-[10px] before:block before:h-full before:w-full before:bg-blue-100 before:transition-all before:duration-200 before:ease-linear after:absolute after:top-[20px] after:block after:h-full after:w-full after:transition-all after:duration-200 after:ease-linear ${open ? 'bg-transparent before:-top-[10px] before:-rotate-45 after:-translate-y-[10px] after:rotate-45' : ''} after:bg-blue-100`}
    />
  );

  return (
    <div className="tablet:hidden mobile-1:block self-stretch">
      <MenuOptions open={open} />
      <div
        className="relative h-full self-stretch"
        onClick={() => setOpen(!open)}
      >
        {iconMenu}
      </div>
    </div>
  );
};

const MenuOptions = ({ open }: { open: boolean }) => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get('page');
  const search = params === 'search';

  return (
    <div
      className={`fixed top-0 right-0 z-0 h-full w-full origin-top-right transition-all duration-300 ease-in-out ${open ? 'scale-100' : 'scale-0'} bg-black-700`}
    >
      <div className="mobile-1:top-[24%] absolute top-[36%] left-[50%] flex h-full w-[82%] -translate-x-[50%] -translate-y-[50%] flex-col justify-start space-y-2 py-[50%]">
        <SearchContainer open={open} search={search}>
          <ButtonBack open={open} />
          <InputSearch open={open} />
        </SearchContainer>

        {!search && (
          <Option open={open} to="/">
            user
            <FeatherIcon.User className="inline" />
          </Option>
        )}
        {!search && (
          <Option open={open} to="/?page=search">
            Search Product <FeatherIcon.ChevronRight className="inline" />
          </Option>
        )}
      </div>
    </div>
  );
};

interface OptionProps {
  children: ReactNode;
  open: boolean;
  to: string;
}
const Option = ({ children, ...props }: OptionProps) => {
  return (
    <NavLink
      to={props.to}
      className={`text-white-100 bg-black-400 mobile-1:text-[16px] mobile-1:py-4 flex w-full items-center justify-between px-3 py-3 font-[Assistant] text-[14px] font-semibold capitalize opacity-0 ${props.open ? 'animate-intro' : ''}`}
    >
      {children}
    </NavLink>
  );
};

const SearchContainer = ({ children, ...props }: SearchContainerProps) => {
  return (
    <section
      className={`absolute w-full opacity-0 ${props.search ? 'visible block' : 'invisible hidden'} ${props.open ? 'animate-intro' : ''}`}
    >
      {children}
      <ProductsContainer />
    </section>
  );
};

const ProductsContainer = () => {
  const intialInfo = (
    <p className="mobile-1:text-xl text-white-700 mt-4 text-center font-[Assistant] text-sm">
      Found Some Product
    </p>
  );
  return (
    <ul className="mobile-1:h-[60vh] relative mt-2 flex h-[50vh] w-full flex-col gap-2 overflow-y-scroll mask-b-from-90%">
      {intialInfo}
      <Product />
    </ul>
  );
};

const Product = () => {
  return (
    <li>
      <div className="border-black-500 relative -z-1 flex items-start gap-3 border-b-2 pb-2">
        <div className='h-20 w-20 bg-[url("./bg-image-1.jpg")] bg-cover bg-center'></div>

        <div>
          <h3 className="text-white-100 font-[Bruno_Ace]">Name</h3>
          <span className="text-black-200 text-xs">Model product</span>
          <p className="text-white-100 font-[Assistant] font-bold">R$ 00,00</p>
        </div>
      </div>
    </li>
  );
};

const InputSearch = ({ open }: { open: boolean }) => {
  return (
    <label
      htmlFor="search"
      className={`bg-black-400 text-white-100 border-black-300 flex h-fit items-center border-2 px-3 has-[input:focus]:border-blue-400 ${open ? 'animate-intro' : ''}`}
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

const ButtonBack = ({ open }: { open: boolean }) => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate(-1)}
      className={`text-white-100 mobile-1:text-[16px] mobile-1:py-4 flex w-full cursor-pointer items-center justify-start py-3 text-[14px] font-semibold opacity-0 ${open ? 'animate-intro' : ''}`}
    >
      <FeatherIcon.ChevronLeft className="inline" /> back
    </span>
  );
};

export default MenuMobileHeader;
