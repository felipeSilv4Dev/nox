import { NavLink } from 'react-router';

interface LinksNavHeaderProps {
  onOpen: () => void;
  open: boolean;
}

const LinksNavHeader = ({ onOpen, open }: LinksNavHeaderProps) => {
  const styles =
    'w-full text-x font-[Assistant] font-semibold capitalize block';

  const styleActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${styles} text-white-100 bg-black-400 px-2 py-2`
      : `${styles} text-white-600 px-2 py-2  hover:text-white-300 `;

  return (
    <nav>
      <ul
        className={`bg-black-600 absolute ${open ? 'visible' : 'invisible hidden'} tablet:w-2xs tablet:left-[initial] tablet:right-[initial] desktop-1:invisible z-1 mt-4 h-fit w-full px-4 py-8 transition-all duration-75 ease-in`}
      >
        <NavLink to={'/'} className={styleActive} onClick={onOpen}>
          Discovery
        </NavLink>

        <NavLink to={'/collection'} className={styleActive} onClick={onOpen}>
          Collection
        </NavLink>
      </ul>
    </nav>
  );
};
export default LinksNavHeader;
