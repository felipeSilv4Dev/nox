import type {
  ProductProps,
  useGlobalProps,
} from '../../utils/useGlobalStorage';
import { handleSetProductsCar } from '../car/ProductCar';

interface propsHandleButtons {
  e: React.MouseEvent<HTMLSpanElement>;
  storage: useGlobalProps;
  setButton: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductProps;
}

interface propsInitialState {
  storage: useGlobalProps;
  product: ProductProps | null;
}

export function handleSetStateButton(props: propsInitialState) {
  if (!props.product) return false;
  const productCar = props.storage.getProductCar(props.product.name);
  if (productCar) return true;
  else return false;
}

export function handleAddCar(props: propsHandleButtons) {
  props.e.preventDefault();
  props.storage.addToCar(props.product);
  props.storage.setNotification(true);
  props.setButton((state) => !state);
  handleSetProductsCar({
    getAllProductsCar: props.storage.getAllProductsCar,
    setProducstInCar: props.storage.setProducstInCar,
  });
}

export function handleRemoveFromCar(props: propsHandleButtons) {
  props.e.preventDefault();
  props.storage.removeFromCar(props.product.name);
  props.storage.setNotification(false);
  props.setButton((state) => !state);
  handleSetProductsCar({
    getAllProductsCar: props.storage.getAllProductsCar,
    setProducstInCar: props.storage.setProducstInCar,
  });
}
