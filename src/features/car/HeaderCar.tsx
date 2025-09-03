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
        className="text-white-600 flex w-fit py-4"
      >
        <FeatherIcon.ChevronLeft />
        back
      </span>
      <h1 className='font-["Bruno_Ace"] text-2xl'>YOUR CAR</h1>
    </div>
  );
};

export default HeaderCar;
