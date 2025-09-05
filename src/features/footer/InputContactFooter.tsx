import * as FeatherIcon from 'feather-icons-react';

const InputContactFooter = () => {
  return (
    <label
      htmlFor="send"
      className={`text-white-100 bg-black-500 relative flex h-fit w-full items-center border-2 border-transparent pl-2 transition-all duration-75 ease-in has-[input:focus]:border-blue-600`}
    >
      <input
        type="text"
        id="send"
        placeholder="send email"
        className="placeholder:text-black-100 w-full focus:outline-none"
      />
      <button className="text-white-100 desktop-1:p-4 tablet:cursor-pointer tablet:hover:bg-blue-500 block w-fit bg-blue-600 p-3 transition-all duration-75 ease-linear">
        <FeatherIcon.Send />
      </button>
    </label>
  );
};

export default InputContactFooter;
