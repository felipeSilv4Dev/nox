import useGlobalStorage from '../../utils/useGlobalStorage';

const MessageSendNotification = () => {
  const { inputValue } = useGlobalStorage((state) => state);
  return (
    <div className="bg-black-500 w-full p-2">
      <blockquote className="text-center text-sm italic">
        " {inputValue} "
      </blockquote>
    </div>
  );
};

export default MessageSendNotification;
