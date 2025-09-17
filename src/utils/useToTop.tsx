import { useEffect } from 'react';
import useGlobalStorage from './useGlobalStorage';

const useToTop = () => {
  const { setOpen } = useGlobalStorage((state) => state);
  return useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [setOpen]);
};

export default useToTop;
