import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../../product/Product';
import useGlobalStorage, {
  type QuantityKeys,
} from '../../../utils/useGlobalStorage';
import type { Swiper as SwiperType } from 'swiper/types';
import { useEffect } from 'react';

const ContainerProducts = () => {
  const storage = useGlobalStorage((state) => state);

  const breakpoints = {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  };

  function handleSwiper(swiper: SwiperType) {
    storage.setModelsProduct(swiper);
  }

  function handleActiveIndexChange(index: SwiperType) {
    storage.SetActiveModelsProduct(index.activeIndex);
  }

  useEffect(() => {
    const quantityProducts = storage.getAllQuantityProducts();
    if (quantityProducts) return;
    const itemsProducts: QuantityKeys[] = storage.products.map((product) => ({
      slug: `${product.slug}`,
      quantity: 1,
    }));

    storage.handleSaveLocalStorage(itemsProducts);
  }, [storage]);

  return (
    <Swiper
      spaceBetween={24}
      onSwiper={handleSwiper}
      onActiveIndexChange={handleActiveIndexChange}
      slidesPerView={1.45}
      breakpoints={breakpoints}
    >
      {storage.products.map((product, index) => (
        <SwiperSlide key={index} className="!h-fit">
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContainerProducts;
