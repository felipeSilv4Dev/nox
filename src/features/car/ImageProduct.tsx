const ImageProduct = ({ src }: { src: string }) => {
  return (
    <div
      style={{ backgroundImage: `url('${src}')` }}
      className={`tablet:h-30 tablet:w-30 h-20 w-20 bg-cover bg-center bg-no-repeat`}
    />
  );
};

export default ImageProduct;
