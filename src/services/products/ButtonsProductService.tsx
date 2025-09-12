import type {
  ProductProps,
  useGlobalProps,
} from '../../utils/useGlobalStorage';

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
  props.setButton((state) => !state);
}

export function handleRemoveFromCar(props: propsHandleButtons) {
  props.e.preventDefault();
  props.storage.removeFromCar(props.product.name);
  props.setButton((state) => !state);
}
