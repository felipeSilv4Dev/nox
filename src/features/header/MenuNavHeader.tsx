import * as FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import LinksNavHeader from './LinksNavHeader';

const styles =
  'w-full text-base font-["Assistant"] font-semibold capitalize block';

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
    <div className="*:desktop-1:hidden relative m-0">
      <NavLink
        to={nameLink === 'discovery' ? '/' : '/collection'}
        onClickCapture={(e) => e.preventDefault()}
        className={`${styles} aria-[current=page]:text-white-100 text-white-600 flex cursor-pointer items-end justify-center capitalize`}
        onClick={handleOpenNav}
      >
        {nameLink}
        <FeatherIcon.ChevronUp
          className={`${open ? 'rotate-0' : 'rotate-180'} w-fit duration-75 ease-in`}
        />
      </NavLink>
      <LinksNavHeader onOpen={handleOpenNav} open={open} />
    </div>
  );
};

export default MenuNavHeader;
