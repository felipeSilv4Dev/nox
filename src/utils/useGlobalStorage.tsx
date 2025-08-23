import { create } from 'zustand';

interface useGlobalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const useGlobalStorage = create<useGlobalProps>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open: open }),
}));

export default useGlobalStorage;
