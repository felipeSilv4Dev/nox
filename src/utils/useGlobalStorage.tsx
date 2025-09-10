import { create } from 'zustand';
import type { Swiper as SwiperType } from 'swiper/types';

const products = [
  {
    image: './product-1.jpg',
    name: 'Classic Brown',
    slug: 'classic-brown',
    model: 'AT30-SE',
    price: '$ 350',
    oldPrice: '$ 420',
    brand: 'Lacoste',
    review: 4,
    details: 'Stainless Steel · Genuine Leather · Sapphire Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Gold Prestige',
    slug: 'gold-prestige',
    model: 'AT31-SE',
    price: '$ 1,200',
    oldPrice: '$ 1,450',
    brand: 'Cartier',
    review: 1,
    details: 'Stainless Steel · Genuine Leather · Sapphire Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Digital Sport',
    slug: 'digital-sport',
    model: 'AT32-SE',
    price: '$ 180',
    oldPrice: '$ 250',
    brand: 'Casio',
    review: 3,
    details: 'Resin Strap · Mineral Glass · Quartz movement god',
  },
  {
    image: './product-1.jpg',
    name: 'Submariner Black',
    slug: 'submariner-black',
    model: 'AT33-SE',
    price: '$ 2,800',
    oldPrice: '$ 3,200',
    brand: 'Rolex',
    review: 5,
    details: 'Oystersteel · Ceramic Bezel · Perpetual Movement',
  },
  {
    image: './product-1.jpg',
    name: 'Sport Active',
    slug: 'sport-active',
    model: 'AT34-SE',
    price: '$ 400',
    oldPrice: '$ 500',
    brand: 'Lacoste',
    review: 2,
    details: 'Resin Strap · Mineral Glass · Quartz movement god',
  },
  {
    image: './product-1.jpg',
    name: 'Elegance Leather',
    slug: 'elegance-leather',
    model: 'AT35-SE',
    price: '$ 950',
    oldPrice: '$ 1,200',
    brand: 'Cartier',
    review: 4,
    details: '18k Gold · Leather Strap · Automatic Movement · Resin Strap',
  },
  {
    image: './product-1.jpg',
    name: 'Illuminator',
    slug: 'illuminator',
    model: 'AT36-SE',
    price: '$ 220',
    oldPrice: '$ 300',
    brand: 'Casio',
    review: 5,
    details: 'Digital Display · Resin Strap · LED Light · Mineral Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Platinum Chrono',
    slug: 'platinum-chrono',
    model: 'AT37-SE',
    price: '$ 3,500',
    oldPrice: '$ 3,900',
    brand: 'Rolex',
    review: 3,
    details: 'Platinum Case · Sapphire Crystal · Chronometer',
  },
  {
    image: './product-1.jpg',
    name: 'Nylon Edition',
    slug: 'nylon-edition',
    model: 'AT38-SE',
    price: '$ 310',
    oldPrice: '$ 370',
    brand: 'Lacoste',
    review: 3,
    details: 'Digital Display · Resin Strap · LED Light · Mineral Glass',
  },
  {
    image: './product-1.jpg',
    name: 'Rose Gold Swiss',
    slug: 'rose-gold-swiss',
    model: 'AT39-SE',
    price: '$ 1,100',
    oldPrice: '$ 1,400',
    brand: 'Cartier',
    review: 4,
    details: 'Chronometer · Rose Gold · Sapphire Glass · Swiss Made',
  },
];

export declare interface QuantityKeys {
  slug: string;
  quantity: number;
}

export declare interface ProductProps {
  image: string;
  name: string;
  slug: string;
  model: string;
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
  product: null | ProductProps;
  setProduct: (value: ProductProps) => void;
  getProduct: (value: string) => ProductProps | null;
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
      (product) => product.slug !== value.slug,
    );

    handleSaveLocalStorage([...newProducts, value]);
  }
}

function getQuantityProduct(slug: string) {
  const products = handleGetAllQuantityProducts();

  if (products) {
    const [product] = products.filter((product) => product.slug === slug);
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

function handleGetProductCar(slug: string) {
  const allProducts = handleGetAllProductsCar();
  if (allProducts) {
    const [product] = allProducts.filter((product) => product.name === slug);
    return product;
  }
  return null;
}

function handleUpdateProductsCar(product: ProductProps) {
  const allProducts = handleGetAllProductsCar();
  if (!allProducts) handleAddToCar([product]);
  if (allProducts) handleAddToCar([...allProducts, product]);
}
function handleRemoveProductCar(slug: string) {
  const allProducts = handleGetAllProductsCar();
  if (allProducts) {
    const newProducts = allProducts.filter((product) => product.name !== slug);
    handleAddToCar(newProducts);
  }
}
function handleGetProduct(slug: string) {
  const [product] = products.filter((product) => product.slug === slug);
  return product ? product : null;
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
  getProduct: (value) => handleGetProduct(value),
  products: products,
  product: null,
  setProduct: (value) => set({ product: value }),
}));

export default useGlobalStorage;
