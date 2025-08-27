const ButtonsProduct = () => {
  return (
    <div className="grid gap-2">
      <span className="text-white-100 block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-3 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-[.15s] ease-in">
        add to car
      </span>
      <span className="text-white-100 bg-black-600 block w-full cursor-pointer py-3 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-[.15s] ease-in">
        details
      </span>
    </div>
  );
};

export default ButtonsProduct;
