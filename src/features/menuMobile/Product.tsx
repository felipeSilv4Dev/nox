const Product = () => {
  return (
    <li>
      <div className="border-black-500 relative -z-1 flex items-start gap-3 border-b-2 pb-2">
        <div className='h-20 w-20 bg-[url("./bg-image-1.jpg")] bg-cover bg-center'></div>

        <div>
          <h3 className="text-white-100 font-[Bruno_Ace]">Name</h3>
          <span className="text-black-200 text-xs">Model product</span>
          <p className="text-white-100 font-[Assistant] font-bold">R$ 00,00</p>
        </div>
      </div>
    </li>
  );
};

export default Product;
