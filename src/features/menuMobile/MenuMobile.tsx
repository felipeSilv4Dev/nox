import useGlobalStorage from '../../utils/useGlobalStorage';

const MenuMobile = () => {
  const { open, setOpen } = useGlobalStorage((state) => state);

  const iconMenu = (
    <div
      className={`relative h-[2px] w-8 bg-blue-100 transition-all duration-200 ease-linear before:absolute before:top-[10px] before:block before:h-full before:w-full before:bg-blue-100 before:transition-all before:duration-200 before:ease-linear after:absolute after:top-[20px] after:block after:h-full after:w-full after:transition-all after:duration-200 after:ease-linear ${open ? 'bg-transparent before:-top-[10px] before:-rotate-45 after:-translate-y-[10px] after:rotate-45' : ''} after:bg-blue-100`}
    />
  );

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="tablet:hidden mobile-1:block cursor-pointer self-stretch">
      <div className="z-4 h-full self-stretch" onClick={handleOpen}>
        {iconMenu}
      </div>
    </div>
  );
};

export default MenuMobile;
