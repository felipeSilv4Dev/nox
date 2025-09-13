import type {
  ProductProps,
  useGlobalProps,
} from '../../utils/useGlobalStorage';
type propsIncrementAndDecrement = {
  storage: useGlobalProps;
  count: number;
  product: ProductProps;
  setCount: React.Dispatch<number>;
};
interface updateQuantityProps extends propsIncrementAndDecrement {
  countTotal: number;
}
export function handleInitialState(
  storage: useGlobalProps,
  product: ProductProps,
) {
  if (!product) return 1;
  const productQuantity = storage.quantityProduct(product.slug);
  if (!productQuantity) return 1;
  return productQuantity.quantity;
}

function handleUpdateQuantity(props: updateQuantityProps) {
  if (!props.product) return;

  props.storage.setQuantity({
    slug: props.product.slug,
    quantity: props.countTotal,
  });
  props.setCount(props.countTotal);
  const quantityPerProducts = props.storage.getAllQuantityProducts();
  props.storage.setQuantityPerProduct(quantityPerProducts);
}
export function handleDecrementQuantity(props: propsIncrementAndDecrement) {
  const countTotal = props.count > 1 ? props.count - 1 : 1;
  handleUpdateQuantity({ ...props, countTotal });
}

export function handleIncrementQuantity(props: propsIncrementAndDecrement) {
  const countTotal = props.count + 1;
  handleUpdateQuantity({ ...props, countTotal });
}
