import * as FeatherIcon from 'feather-icons-react';
import { useNavigate } from 'react-router';
import useGlobalStorage from '../../utils/useGlobalStorage';

const ButtonBack = () => {
  const open = useGlobalStorage((state) => state.open);

  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate(-1)}
      className={`text-white-500 mobile-1:text-[16px] mobile-1:py-4 flex w-full cursor-pointer items-center justify-start py-3 text-[14px] font-semibold opacity-0 ${open ? 'animate-intro' : ''}`}
    >
      <FeatherIcon.ChevronLeft className="inline" /> back
    </span>
  );
};

export default ButtonBack;
