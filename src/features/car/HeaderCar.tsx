import * as FeatherIcon from 'feather-icons-react';
import { useNavigate } from 'react-router';

const HeaderCar = () => {
  const navigate = useNavigate();

  function handleToPrevPage() {
    navigate(-1);
  }

  return (
    <div className="px-4">
      <span
        onClick={handleToPrevPage}
        className="text-white-600 tablet:text-xl hover:text-white-300 flex w-fit cursor-pointer items-center py-4 transition-all duration-75 ease-linear"
      >
        <FeatherIcon.ChevronLeft />
        back
      </span>
      <h1 className='tablet:text-3xl font-["Bruno_Ace"] text-2xl'>YOUR CAR</h1>
    </div>
  );
};

export default HeaderCar;
