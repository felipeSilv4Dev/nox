import * as FeatherIcon from 'feather-icons-react';
import useGlobalStorage from '../../utils/useGlobalStorage';

const CloseSendNotification = () => {
  const { setSendNotification } = useGlobalStorage((state) => state);
  return (
    <span
      onClick={() => setSendNotification(false)}
      className="bg-black-500 hover:bg-black-400 absolute top-0 right-0 cursor-pointer p-3 transition-all duration-75 ease-linear"
    >
      <FeatherIcon.X />
    </span>
  );
};

export default CloseSendNotification;
