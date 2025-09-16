import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../product/Product';
import useGlobalStorage, {
  type ProductProps,
  type QuantityKeys,
} from '../../utils/useGlobalStorage';
import type { Swiper as SwiperType } from 'swiper/types';
import { useEffect } from 'react';

const ContainerCollection = ({ products }: { products: ProductProps[] }) => {
  const setModelsProduct = useGlobalStorage((state) => state.setModelsProduct);
  const setActiveModelsProduct = useGlobalStorage(
    (state) => state.setActiveModelsProduct,
  );
  const getAllQuantityProducts = useGlobalStorage(
    (state) => state.getAllQuantityProducts,
  );
  const handleSaveLocalStorage = useGlobalStorage(
    (state) => state.handleSaveLocalStorage,
  );
  const quantityProducts = getAllQuantityProducts();

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
    setModelsProduct(swiper);
  }

  function handleActiveIndexChange(index: SwiperType) {
    setActiveModelsProduct(index.activeIndex);
  }

  useEffect(() => {
    if (quantityProducts) return;
    const itemsProducts: QuantityKeys[] = products.map((product) => ({
      slug: `${product.slug}`,
      quantity: 1,
    }));

    handleSaveLocalStorage(itemsProducts);
  }, [
    getAllQuantityProducts,
    quantityProducts,
    handleSaveLocalStorage,
    products,
  ]);

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1.45}
      breakpoints={breakpoints}
      observer={false}
      observeParents={false}
      onSwiper={handleSwiper}
      onActiveIndexChange={handleActiveIndexChange}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} className="!h-fit">
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContainerCollection;
