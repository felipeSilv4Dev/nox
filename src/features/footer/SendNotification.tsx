import * as FeatherIcon from 'feather-icons-react';
import CloseSendNotification from './CloseSendNotification';
import MessageSendNotification from './MessageSendNotification';
import useGlobalStorage from '../../utils/useGlobalStorage';
import { useEffect } from 'react';

const SendNotification = () => {
  const { sendNotification, setSendNotification } = useGlobalStorage(
    (state) => state,
  );
  useEffect(() => {
    let time = 0;
    if (sendNotification) {
      time = setTimeout(() => {
        setSendNotification(false);
      }, 1500);
    }

    return () => {
      return clearTimeout(time);
    };
  }, [setSendNotification, sendNotification]);

  function handlerCloseNotification(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    if (e.target instanceof HTMLDivElement) {
      if (e.target.dataset.send === 'true') {
        setSendNotification(false);
      }
    }
  }
  return (
    sendNotification && (
      <div
        onClick={handlerCloseNotification}
        data-send
        className="bg-black-900/30 fixed top-0 left-0 z-3 flex h-full w-full items-center justify-center overflow-y-hidden font-['Assistant']"
      >
        <div
          className={`bg-black-700 ${sendNotification ? 'animate-notification' : ''} desktop-1:w-[80%] desktop-2:w-[76%] tablet:w-[94%] relative mx-4 flex w-full flex-col items-center gap-4 px-4 py-10 text-white`}
          onClick={(e) => e.preventDefault()}
        >
          <FeatherIcon.CheckCircle className="h-8 w-8 text-green-500" />
          <h2 className="font-semibold capitalize">message sended</h2>

          <MessageSendNotification />
          <CloseSendNotification />
        </div>
      </div>
    )
  );
};

export default SendNotification;
