import NavLinksHeader from './NavLinksHeader';
import NavIconsHeader from './NavIconsHeader';
import { useEffect, useState } from 'react';
import useGlobalStorage from '../../utils/useGlobalStorage';
import Logo from '../../utils/Logo';

const Header = () => {
  const open = useGlobalStorage((state) => state.open);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-3 py-6 ${scrolled && !open ? 'bg-black-900/70 backdrop-blur-md' : ''} ${open ? 'fixed overflow-hidden' : ''} col-span-full row-end-1 flex h-fit w-full items-center justify-between px-4`}
    >
      <Logo />
      {!open && <NavLinksHeader />}
      <NavIconsHeader />
    </header>
  );
};

export default Header;
