import type { useGlobalProps } from '../../utils/useGlobalStorage';
type propsIncrementAndDecrement = {
  storage: useGlobalProps;
  count: number;
  setCount: React.Dispatch<number>;
};
interface updateQuantityProps extends propsIncrementAndDecrement {
  countTotal: number;
}
export function handleInitialState(storage: useGlobalProps) {
  if (!storage.product) return 1;
  const productQuantity = storage.quantityProduct(storage.product.slug);
  if (!productQuantity) return 1;
  return productQuantity.quantity;
}

function handleUpdateQuantity(props: updateQuantityProps) {
  if (!props.storage.product) return;

  props.storage.setQuantity({
    slug: props.storage.product.slug,
    quantity: props.countTotal,
  });
  props.setCount(props.countTotal);
}
export function handleDecrementQuantity(props: propsIncrementAndDecrement) {
  const countTotal = props.count > 1 ? props.count - 1 : 1;
  handleUpdateQuantity({ ...props, countTotal });
}

export function handleIncrementQuantity(props: propsIncrementAndDecrement) {
  const countTotal = props.count + 1;
  handleUpdateQuantity({ ...props, countTotal });
}
