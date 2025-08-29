import Logo from '../../utils/Logo';
import * as FeatherIcon from 'feather-icons-react';

const HeaderFooter = () => {
  function handleToTopPage() {
    window.scrollTo({ top: 0 });
  }
  return (
    <header className="col-span-full flex items-center justify-between">
      <Logo />

      <span
        onClick={handleToTopPage}
        className="border-black-500 hover:bg-black-500 desktop-1:p-4 text-white-200 block w-fit cursor-pointer border-2 p-1"
      >
        <FeatherIcon.ChevronUp />
      </span>
    </header>
  );
};

export default HeaderFooter;
