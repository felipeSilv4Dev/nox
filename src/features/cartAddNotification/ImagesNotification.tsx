import * as FeatherIcon from 'feather-icons-react';
import type { ProductProps } from '../../utils/useGlobalStorage';
const ImagesNotification = ({
  count,
  products,
}: {
  count: number;
  products: ProductProps[];
}) => {
  return (
    <div className="flex">
      <div
        style={{
          backgroundImage: `url(https://wornandwound.com/library/uploads/2022/01/Omega-Speedmaster-321-Canopus-Gold-8.jpg)`,
        }}
        className={`tablet:h-20 tablet:w-20 border-black-800 relative h-15 w-15 border-2 bg-cover bg-center bg-no-repeat`}
      >
        {count > 1 && (
          <span
            style={{ backgroundImage: `url(${products[1].image})` }}
            className="border-black-800 absolute top-1 -right-[50%] -z-1 h-[90%] w-[90%] border-2 bg-cover bg-center bg-no-repeat"
          />
        )}

        {count > 2 && (
          <span
            style={{
              backgroundImage: count <= 3 ? `url(${products[2].image})` : '',
              backgroundColor: count > 3 ? 'var(--color-black-500)' : '',
            }}
            className="border-black-800 absolute top-[16%] -right-[90%] -z-2 flex h-[70%] w-[70%] items-center justify-center border-2 bg-cover bg-center bg-no-repeat"
          >
            {count > 3 && <FeatherIcon.Plus className="h-4" />}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImagesNotification;
