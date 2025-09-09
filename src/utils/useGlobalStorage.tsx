import { create } from 'zustand';
import type { Swiper as SwiperType } from 'swiper/types';

const products = [
  {
    image: './product-1.jpg',
    name: 'Classic Brown',
    price: '$350',
    oldPrice: '$420',
    brand: 'Lacoste',
    review: 4,
    details: 'Stainless Steel · Genuine Leather · Sapphire Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Gold Prestige',
    price: '$1,200',
    oldPrice: '$1,450',
    brand: 'Cartier',
    review: 5,
    details: 'Stainless Steel · Genuine Leather · Sapphire Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Digital Sport',
    price: '$180',
    oldPrice: '$250',
    brand: 'Casio',
    review: 3,
    details: 'Resin Strap · Mineral Glass · Quartz movement god',
  },
  {
    image: './product-1.jpg',
    name: 'Submariner Black',
    price: '$2,800',
    oldPrice: '$3,200',
    brand: 'Rolex',
    review: 5,
    details: 'Oystersteel · Ceramic Bezel · Perpetual Movement',
  },
  {
    image: './product-1.jpg',
    name: 'Sport Active',
    price: '$400',
    oldPrice: '$500',
    brand: 'Lacoste',
    review: 2,
    details: 'Resin Strap · Mineral Glass · Quartz movement god',
  },
  {
    image: './product-1.jpg',
    name: 'Elegance Leather',
    price: '$950',
    oldPrice: '$1,200',
    brand: 'Cartier',
    review: 4,
    details: '18k Gold · Leather Strap · Automatic Movement · Resin Strap',
  },
  {
    image: './product-1.jpg',
    name: 'Illuminator',
    price: '$220',
    oldPrice: '$300',
    brand: 'Casio',
    review: 5,
    details: 'Digital Display · Resin Strap · LED Light · Mineral Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Platinum Chrono',
    price: '$3,500',
    oldPrice: '$3,900',
    brand: 'Rolex',
    review: 5,
    details: 'Platinum Case · Sapphire Crystal · Chronometer',
  },
  {
    image: './product-1.jpg',
    name: 'Nylon Edition',
    price: '$310',
    oldPrice: '$370',
    brand: 'Lacoste',
    review: 3,
    details: 'Digital Display · Resin Strap · LED Light · Mineral Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Rose Gold Swiss',
    price: '$1,100',
    oldPrice: '$1,400',
    brand: 'Cartier',
    review: 4,
    details: 'Chronometer · Rose Gold · Sapphire Glass · Swiss Made',
  },
];
export declare interface QuantityKeys {
  nameId: string;
  quantity: number;
}

export declare interface ProductProps {
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  brand: string;
  review: number;
  details: string;
}

interface useGlobalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  modelsProduct: SwiperType | null;
  setModelsProduct: (value: SwiperType) => void;
  SetActiveModelsProduct: (value: number) => void;
  activeModelsProduct: number;
  quantityAllProducts: QuantityKeys[] | null;
  setQuantity: (value: QuantityKeys) => void;
  quantityProduct: (value: string) => QuantityKeys | null;
  handleSaveLocalStorage: (value: QuantityKeys[]) => void;

  // CAR
  addToCar: (value: ProductProps) => void;
  removeFromCar: (value: string) => void;
  getAllProductsCar: () => ProductProps[] | null;
  getProductCar: (value: string) => ProductProps | null;
  // PRODUCTS
  products: ProductProps[];
}

function handleSaveLocalStorage(value: QuantityKeys[]) {
  localStorage.setItem('products', JSON.stringify(value));
}

function handleGetAllQuantityProducts(): QuantityKeys[] | null {
  const item = localStorage.getItem('products');
  if (item) {
    const products: QuantityKeys[] = JSON.parse(item);
    return products;
  }
  return null;
}

function handleUpdateQuantityProducts(value: QuantityKeys) {
  const products = handleGetAllQuantityProducts();

  if (products) {
    const newProducts = products.filter(
      (product) => product.nameId !== value.nameId,
    );

    handleSaveLocalStorage([...newProducts, value]);
  }
}

function getQuantityProduct(nameId: string) {
  const products = handleGetAllQuantityProducts();

  if (products) {
    const [product] = products.filter((product) => product.nameId === nameId);
    return product;
  }
  return null;
}

function handleAddToCar(product: ProductProps[]) {
  localStorage.setItem('car', JSON.stringify(product));
}

function handleGetAllProductsCar(): ProductProps[] | null {
  const item = localStorage.getItem('car');
  if (item) {
    const allProducts = JSON.parse(item);
    return allProducts;
  }
  return null;
}

function handleGetProductCar(nameId: string) {
  const allProducts = handleGetAllProductsCar();
  if (allProducts) {
    const [product] = allProducts.filter((product) => product.name === nameId);
    return product;
  }
  return null;
}

function handleUpdateProductsCar(product: ProductProps) {
  const allProducts = handleGetAllProductsCar();
  if (!allProducts) handleAddToCar([product]);
  if (allProducts) handleAddToCar([...allProducts, product]);
}
function handleRemoveProductCar(nameId: string) {
  const allProducts = handleGetAllProductsCar();
  if (allProducts) {
    const newProducts = allProducts.filter(
      (product) => product.name !== nameId,
    );
    handleAddToCar(newProducts);
  }
}

const useGlobalStorage = create<useGlobalProps>((set) => ({
  open: false,
  setOpen: (open) => set({ open: open }),
  modelsProduct: null,
  setModelsProduct: (value) => set({ modelsProduct: value }),
  SetActiveModelsProduct: (value) => set({ activeModelsProduct: value }),

  // QUANTITY
  quantityProduct: (value) => getQuantityProduct(value),
  quantityAllProducts: handleGetAllQuantityProducts(),
  setQuantity: (value) => handleUpdateQuantityProducts(value),
  activeModelsProduct: 0,
  handleSaveLocalStorage,

  // CAR
  addToCar: (value) => handleUpdateProductsCar(value),
  getAllProductsCar: () => handleGetAllProductsCar(),
  getProductCar: (value) => handleGetProductCar(value),
  removeFromCar: (value) => handleRemoveProductCar(value),

  // PRODUCTS
  products: products,
}));

export default useGlobalStorage;
