import * as FeatherIcon from 'feather-icons-react';
import useGlobalStorage from '../../utils/useGlobalStorage';
import { useEffect, useState } from 'react';

const CartAddNotification = () => {
  const { productsInCar } = useGlobalStorage((state) => state);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    let time = 0;
    if (productsInCar && productsInCar.length) {
      time = setTimeout(() => {
        setOpen(false);
      }, 2000);
    }

    return () => {
      return clearTimeout(time);
    };
  }, [productsInCar]);

  useEffect(() => {
    setOpen(true);
  }, [productsInCar]);

  if (!productsInCar || !productsInCar.length) return <></>;
  return (
    open && (
      <div
        className={`${productsInCar ? 'animate-notification' : ''} bg-black-800 text-white-100 fixed -top-1 left-0 z-3 col-span-full flex w-full items-center justify-between p-4`}
      >
        <div className="flex">
          <div
            style={{
              backgroundImage: `url(https://wornandwound.com/library/uploads/2022/01/Omega-Speedmaster-321-Canopus-Gold-8.jpg)`,
            }}
            className={`tablet:h-20 tablet:w-20 border-black-800 relative h-15 w-15 border-2 bg-cover bg-center bg-no-repeat`}
          >
            {productsInCar.length > 1 && (
              <span
                style={{ backgroundImage: `url(${productsInCar[1].image})` }}
                className="border-black-800 absolute top-1 -right-[50%] -z-1 h-[90%] w-[90%] border-2 bg-cover bg-center bg-no-repeat"
              />
            )}

            {productsInCar.length > 2 && (
              <span
                style={{
                  backgroundImage:
                    productsInCar.length <= 3
                      ? `url(${productsInCar[2].image})`
                      : '',
                  backgroundColor:
                    productsInCar.length > 3 ? 'var(--color-black-500)' : '',
                }}
                className="border-black-800 absolute top-[16%] -right-[90%] -z-2 flex h-[70%] w-[70%] items-center justify-center border-2 bg-cover bg-center bg-no-repeat"
              >
                {productsInCar.length > 3 && (
                  <FeatherIcon.Plus className="h-4" />
                )}
              </span>
            )}
          </div>
        </div>
        <p className="text-base font-semibold lowercase">
          {productsInCar.length} item added into the car
        </p>
        <span
          onClick={() => setOpen(!open)}
          className="bg-black-500 hover:bg-black-400 cursor-pointer p-3 transition-all duration-75 ease-linear"
        >
          <FeatherIcon.X />
        </span>
      </div>
    )
  );
};

export default CartAddNotification;
