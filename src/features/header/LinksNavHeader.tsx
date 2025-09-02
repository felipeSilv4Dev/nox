import { NavLink } from 'react-router';

interface LinksNavHeaderProps {
  onOpen: () => void;
  open: boolean;
}

const LinksNavHeader = ({ onOpen, open }: LinksNavHeaderProps) => {
  const styles =
    'w-full text-base font-["Assistant"] font-semibold capitalize block aria-[current=page]:bg-black-400 aria-[current=page]:text-white-100 text-white-600 hover:text-white-300 px-2 py-2';

  return (
    <nav>
      <ul
        className={`bg-black-600 absolute ${open ? 'visible' : 'invisible hidden'} tablet:w-2xs tablet:left-[initial] tablet:right-[initial] desktop-1:invisible left-0 z-1 mt-4 h-fit w-[60vw] px-4 py-8 transition-all duration-75 ease-in`}
      >
        <NavLink to={'/'} className={styles} onClick={onOpen}>
          Discovery
        </NavLink>

        <NavLink to={'/collection'} className={styles} onClick={onOpen}>
          Collection
        </NavLink>
      </ul>
    </nav>
  );
};
export default LinksNavHeader;
