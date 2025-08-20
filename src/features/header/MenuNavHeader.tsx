import * as FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

const styles = 'w-full text-x font-[Assistant] font-semibold capitalize block';
const styleActive = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${styles} text-white-100 bg-black-400 px-2 py-2`
    : `${styles} text-white-600 px-2 py-2  hover:text-white-300 `;

const MenuNavHeader = () => {
  const [open, setOpen] = useState(false);
  const [nameLink, setNameLink] = useState('discovery');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setNameLink('discovery');
    if (location.pathname === '/collection') setNameLink('collection');
  }, [location]);

  function handleOpenNav() {
    setOpen((open) => !open);
  }

  return (
    <>
      <div className="*:desktop-1:hidden relative m-0">
        <p
          className={`${styles} text-white-100 flex cursor-pointer items-end justify-center capitalize`}
          onClick={handleOpenNav}
        >
          {nameLink}
          <FeatherIcon.ChevronUp
            className={`${open ? 'rotate-0' : 'rotate-180'} w-fit duration-75 ease-in`}
          />
        </p>
      </div>
      <Links onOpen={handleOpenNav} open={open} />
    </>
  );
};

interface LinksProps {
  onOpen: () => void;
  open: boolean;
}

const Links = ({ onOpen, open }: LinksProps) => {
  return (
    <nav
      className={`bg-black-600 absolute ${open ? 'visible' : 'invisible hidden'} tablet:w-2xs tablet:left-[initial] tablet:right-[initial] desktop-1:invisible right-4 left-8 z-2 mt-4 h-fit px-4 py-8 transition-all duration-75 ease-in`}
    >
      <NavLink to={'/'} className={styleActive} onClick={onOpen}>
        Discovery
      </NavLink>

      <NavLink to={'/collection'} className={styleActive} onClick={onOpen}>
        Collection
      </NavLink>
    </nav>
  );
};

export default MenuNavHeader;
