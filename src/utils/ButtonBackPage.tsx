import * as FeatherIcon from 'feather-icons-react';
import { useNavigate } from 'react-router';
const ButtonBackPage = () => {
  const navigate = useNavigate();

  function handleToPrevPage() {
    navigate(-1);
  }
  return (
    <span
      onClick={handleToPrevPage}
      className="text-white-600 tablet:text-xl hover:text-white-300 flex w-fit cursor-pointer items-center py-4 transition-all duration-75 ease-linear"
    >
      <FeatherIcon.ChevronLeft />
      back
    </span>
  );
};

export default ButtonBackPage;
