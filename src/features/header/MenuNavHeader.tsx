import * as FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

const styles = 'w-full text-x font-[Assistant] font-semibold capitalize block';

const MenuNavHeader = () => {
  const [open, setOpen] = useState(false);

  const styleActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${styles} text-white-100 bg-black-400 px-2 py-2`
      : `${styles} text-white-600 px-2 py-2  hover:text-white-300 `;

  function handleOpenNav() {
    setOpen((open) => !open);
  }

  return (
    <section className="*:desktop-1:hidden m-0 flex flex-col gap-2">
      <p
        className={`${styles} text-white-100 flex cursor-pointer items-end justify-center`}
        onClick={handleOpenNav}
      >
        Collection
        <FeatherIcon.ChevronUp
          className={`${open ? 'rotate-0' : 'rotate-180'} w-fit duration-75 ease-in`}
        />
      </p>

      <nav
        className={`bg-black-600 ${open ? 'visible' : 'invisible'} tablet:w-2xs z-2 mt-4 h-fit w-[50vw] px-4 py-8 transition-all duration-75 ease-in`}
      >
        <NavLink to={'/'} className={styleActive} onClick={handleOpenNav}>
          Discovery
        </NavLink>

        <NavLink
          to={'/collection'}
          className={styleActive}
          onClick={handleOpenNav}
        >
          Collection
        </NavLink>
      </nav>
    </section>
  );
};

export default MenuNavHeader;
