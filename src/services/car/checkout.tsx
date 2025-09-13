import {
  type ProductProps,
  type QuantityKeys,
} from '../../utils/useGlobalStorage';

interface filterbySlugProps {
  product: ProductProps | null;
  quantityPerProduct: QuantityKeys[] | null;
}

interface handlerCompareSlug {
  productsInCar: ProductProps[] | null;
  quantityPerProduct: QuantityKeys[] | null;
}
interface handleSetTotalProps extends handlerCompareSlug {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}
export function handleSetValueTotal(props: handleSetTotalProps) {
  const totalCount = handlerCalculateTotal({
    productsInCar: props.productsInCar,
    quantityPerProduct: props.quantityPerProduct,
  });
  if (!totalCount) return;
  props.setTotal(totalCount);
}

const handlerCalculateTotal = (props: handlerCompareSlug) => {
  const productsQuantity = handlerCompareSlug({
    productsInCar: props.productsInCar,
    quantityPerProduct: props.quantityPerProduct,
  });

  if (!productsQuantity) return;
  const productsQuantityFiltered = handlerFilterProducts(productsQuantity);

  if (!productsQuantityFiltered) return;

  return productsQuantityFiltered.reduce(
    (acc, product) => (acc ? acc : 0) + (product ? product : 0),
    0,
  );
};

function handlerClearPrice(product: ProductProps) {
  return +product.price.trim().replaceAll('$', '').replaceAll(',', '');
}

const handlerFilterBySlug = (props: filterbySlugProps) => {
  if (!props.quantityPerProduct) return null;
  if (!props.product) return null;
  const product = props.product;

  return props.quantityPerProduct.map((item) => {
    if (product.slug === item.slug) {
      return handlerClearPrice(product) * item.quantity;
    }
    return null;
  });
};

const handlerCompareSlug = ({
  productsInCar,
  quantityPerProduct,
}: handlerCompareSlug) => {
  if (!productsInCar) return null;
  return productsInCar.flatMap((product) =>
    handlerFilterBySlug({ product, quantityPerProduct }),
  );
};

function handlerFilterProducts(productsQuantity: (number | null)[] | null) {
  if (!productsQuantity) return;
  return productsQuantity.filter((product) => product);
}
