import useGlobalStorage from '../../utils/useGlobalStorage';
import { useEffect } from 'react';
import CloseNotification from './CloseNotification';
import TextNotification from './TextNotification';
import ImagesNotification from './ImagesNotification';

const CartAddNotification = () => {
  const { productsInCar, notification, setNotification } = useGlobalStorage(
    (state) => state,
  );

  useEffect(() => {
    let time = 0;
    if (productsInCar && productsInCar.length) {
      time = setTimeout(() => {
        setNotification(false);
      }, 2000);
    }

    return () => {
      return clearTimeout(time);
    };
  }, [productsInCar, setNotification]);

  if (!productsInCar || !productsInCar.length) return;
  return (
    notification && (
      <div
        className={`${productsInCar ? 'animate-notification' : ''} bg-black-800 text-white-100 desktop-1:w-[80%] desktop-2:w-[76%] tablet:w-[94%] left-/2 fixed -top-1 z-3 col-span-full flex w-full items-center justify-between p-4 font-['Assistant']`}
      >
        <ImagesNotification
          count={productsInCar.length}
          products={productsInCar}
        />
        <TextNotification count={productsInCar.length} />
        <CloseNotification onRemove={() => setNotification(!open)} />
      </div>
    )
  );
};

export default CartAddNotification;
