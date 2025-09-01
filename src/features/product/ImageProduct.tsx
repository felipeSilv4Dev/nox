const ImageProduct = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(6, 6, 11,.1) 50%,rgba(6,6,11,.8) 95%),url('./product-1.jpg')`,
      }}
      className="relative h-64 w-full bg-cover bg-center"
    >
      <div className="absolute bottom-4 left-4">
        <h2 className='text-white-100 font-["Bruno_Ace"] uppercase'>Aeris</h2>
        <div className="space-x-3">
          <span className="text-white-100 font-['Assistant']">$950,00</span>
          <span className="text-white-800 font-['Assistant'] line-through">
            $1050,00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageProduct;
