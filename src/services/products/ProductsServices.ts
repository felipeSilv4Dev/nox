import useGlobalStorage from '../../utils/useGlobalStorage';
import UseMatch from '../../utils/UseMatch';

const ProductsService = () => {
  const { modelsProduct, activeModelsProduct } = useGlobalStorage(
    (state) => state,
  );
  const isTablet = UseMatch('64rem');
  const isDesktop = UseMatch('100rem');

  const slideCount = isDesktop ? 5 : isTablet ? 4 : 1;
  if (!modelsProduct) return;

  const lastSlide = modelsProduct.slides.length;
  const existPrev = activeModelsProduct > slideCount / 2;
  const existNext = activeModelsProduct < lastSlide - slideCount;

  function next() {
    if (modelsProduct) {
      const index = activeModelsProduct + slideCount;
      modelsProduct.slideTo(index);
    }
  }

  function prev() {
    if (modelsProduct) {
      const index = activeModelsProduct - slideCount;
      modelsProduct.slideTo(index);
    }
  }

  return { next, prev, existNext, existPrev };
};

export default ProductsService;
