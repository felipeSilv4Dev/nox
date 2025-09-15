import type {
  ProductProps,
  useGlobalProps,
} from '../../utils/useGlobalStorage';

interface removeFromCarProps {
  storage: useGlobalProps;
  product: ProductProps;
}
interface handleProductsCarProps {
  getAllProductsCar: () => ProductProps[] | null;
  setProducstInCar: (value: ProductProps[] | null) => void;
}
export function handleSetProductsCar({
  getAllProductsCar,
  setProducstInCar,
}: handleProductsCarProps) {
  const products = getAllProductsCar();
  setProducstInCar(products && products.length > 0 ? products : null);
}

export function handleRemoveFromCar({ storage, product }: removeFromCarProps) {
  storage.removeFromCar(product.name);
  storage.setNotification(false);

  handleSetProductsCar({
    getAllProductsCar: storage.getAllProductsCar,
    setProducstInCar: storage.setProducstInCar,
  });
}
