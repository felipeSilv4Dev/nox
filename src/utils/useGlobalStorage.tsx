import { create } from 'zustand';
import type { Swiper as SwiperType } from 'swiper/types';

const products = [
  {
    image:
      'https://images.unsplash.com/photo-1589391943533-d6856910b7a8?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image:
      'https://images.unsplash.com/photo-1638872726444-0579101a60e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image:
      'https://images.unsplash.com/photo-1614028673848-14eae689983b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image:
      'https://images.unsplash.com/photo-1649768563901-a799abc06e74?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image:
      'https://images.unsplash.com/photo-1587400519568-1fe0329bfb2e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2glMjBTcG9ydCUyMEFjdGl2ZXxlbnwwfHwwfHx8MA%3D%3D',
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
    image:
      'https://images.unsplash.com/photo-1612817159576-986a0b7a4165?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2glMjBFbGVnYW5jZSUyMExlYXRoZXJ8ZW58MHx8MHx8fDA%3D',
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
    image:
      'https://images.unsplash.com/photo-1712256840358-23ed3248273c?q=80&w=427&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image:
      'https://images.unsplash.com/photo-1729044320112-7fad57c029ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdhdGNoJTIwUGxhdGludW0lMjBDaHJvbm98ZW58MHx8MHx8fDA%3D',
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
    image:
      'https://images.unsplash.com/photo-1616867343582-9af5734aad4c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image:
      'https://plus.unsplash.com/premium_photo-1728012217493-b0bfdc0c389a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

export declare interface useGlobalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  modelsProduct: SwiperType | null;
  setModelsProduct: (value: SwiperType) => void;
  setActiveModelsProduct: (value: number) => void;
  activeModelsProduct: number;
  notification: boolean;
  setNotification: (value: boolean) => void;
  sendNotification: boolean;
  setSendNotification: (value: boolean) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  searchProduct: string;
  setSearchProduct: (value: string) => void;

  // QUANTITY
  getAllQuantityProducts: () => QuantityKeys[] | null;
  setQuantity: (value: QuantityKeys) => void;
  quantityProduct: (value: string) => QuantityKeys | null;
  handleSaveLocalStorage: (value: QuantityKeys[]) => void;
  quantityPerProduct: QuantityKeys[] | null;
  setQuantityPerProduct: (value: QuantityKeys[] | null) => void;

  // CAR
  addToCar: (value: ProductProps) => void;
  removeFromCar: (value: string) => void;
  getAllProductsCar: () => ProductProps[] | null;
  getProductCar: (value: string) => ProductProps | null;
  productsInCar: ProductProps[] | null;
  setProducstInCar: (value: ProductProps[] | null) => void;

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
    const productFiltered = products.filter(
      (product) => product.slug !== value.slug,
    );

    handleSaveLocalStorage([...productFiltered, value]);
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
  setActiveModelsProduct: (value) => set({ activeModelsProduct: value }),
  activeModelsProduct: 0,
  handleSaveLocalStorage,
  notification: false,
  setNotification: (value) => set({ notification: value }),
  sendNotification: false,
  setSendNotification: (value) => set({ sendNotification: value }),
  inputValue: '',
  setInputValue: (value) => set({ inputValue: value }),
  searchProduct: '',
  setSearchProduct: (value) => set({ searchProduct: value }),

  // QUANTITY
  quantityProduct: (value) => getQuantityProduct(value),
  getAllQuantityProducts: () => handleGetAllQuantityProducts(),
  setQuantity: (value) => handleUpdateQuantityProducts(value),
  quantityPerProduct: handleGetAllQuantityProducts(),
  setQuantityPerProduct: (value: QuantityKeys[] | null) =>
    set({ quantityPerProduct: value }),

  // CAR
  addToCar: (value) => handleUpdateProductsCar(value),
  getAllProductsCar: () => handleGetAllProductsCar(),
  getProductCar: (value) => handleGetProductCar(value),
  removeFromCar: (value) => handleRemoveProductCar(value),
  productsInCar: handleGetAllProductsCar(),
  setProducstInCar: (value: ProductProps[] | null) =>
    set({ productsInCar: value }),

  // PRODUCTS
  getProduct: (value) => handleGetProduct(value),
  products: products,
  product: null,
  setProduct: (value) => set({ product: value }),
}));

export default useGlobalStorage;
