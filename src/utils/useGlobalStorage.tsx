import { create } from 'zustand';
import type { Swiper as SwiperType } from 'swiper/types';

interface useGlobalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  modelsProduct: SwiperType | null;
  setModelsProduct: (value: SwiperType) => void;
  SetActiveModelsProduct: (value: number) => void;
  activeModelsProduct: number;
}

const useGlobalStorage = create<useGlobalProps>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open: open }),
  modelsProduct: null,
  activeModelsProduct: 0,
  setModelsProduct: (value: SwiperType) => set({ modelsProduct: value }),
  SetActiveModelsProduct: (value: number) =>
    set({ activeModelsProduct: value }),
}));

export default useGlobalStorage;
