import * as FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import LinksNavHeader from './LinksNavHeader';

const styles = 'w-full text-x font-[Assistant] font-semibold capitalize block';

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
      <p
        className={`${styles} text-white-100 flex cursor-pointer items-end justify-center capitalize`}
        onClick={handleOpenNav}
      >
        {nameLink}
        <FeatherIcon.ChevronUp
          className={`${open ? 'rotate-0' : 'rotate-180'} w-fit duration-75 ease-in`}
        />
      </p>
      <LinksNavHeader onOpen={handleOpenNav} open={open} />
    </div>
  );
};

export default MenuNavHeader;
