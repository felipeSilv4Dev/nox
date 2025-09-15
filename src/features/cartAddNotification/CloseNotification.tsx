import * as FeatherIcon from 'feather-icons-react';

const CloseNotification = ({ onRemove }: { onRemove: () => void }) => {
  return (
    <span
      onClick={onRemove}
      className="bg-black-500 hover:bg-black-400 cursor-pointer p-3 transition-all duration-75 ease-linear"
    >
      <FeatherIcon.X />
    </span>
  );
};

export default CloseNotification;
