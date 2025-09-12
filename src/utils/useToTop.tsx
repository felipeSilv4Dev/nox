import { useEffect } from 'react';

const useToTop = () => {
  return useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
};

export default useToTop;
