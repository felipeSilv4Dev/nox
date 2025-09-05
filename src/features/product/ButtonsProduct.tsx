const ButtonsProduct = () => {
  function handleAddCar(e: React.MouseEvent<HTMLSpanElement>) {
    e.preventDefault();
  }

  return (
    <div className="grid gap-2">
      <span
        onClick={handleAddCar}
        className="text-white-100 tablet:hover:from-blue-500 tablet:hover:to-blue-700 block w-full cursor-pointer bg-linear-to-l from-blue-800 to-blue-600 py-3 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-[.15s] ease-linear"
      >
        add to car
      </span>
      <span className="text-white-100 bg-black-600 tablet:hover:bg-black-400 block w-full cursor-pointer py-3 text-center font-['Bruno_Ace'] text-sm uppercase transition-all duration-[.15s] ease-in">
        details
      </span>
    </div>
  );
};

export default ButtonsProduct;
