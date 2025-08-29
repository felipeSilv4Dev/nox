import * as FeatherIcon from 'feather-icons-react';

const ContactsFooter = () => {
  return (
    <div className="col-span-full space-y-4">
      <div className="space-y-0.5">
        <h2 className='text-white-100 font-["Assistant"] text-[18px] font-semibold'>
          Email
        </h2>
        <p className='text-white-500 font-["Assistant"] text-sm'>
          user@gmail.com
        </p>
      </div>

      <div className="space-y-0.5">
        <h2 className='text-white-100 font-["Assistant"] text-[18px] font-semibold'>
          Call
        </h2>
        <p className='text-white-500 font-["Assistant"] text-sm'>
          (99) 9 9999-9999
        </p>
      </div>

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
        <button className="text-white-100 desktop-1:p-4 block w-fit bg-blue-600 p-3">
          <FeatherIcon.Send />
        </button>
      </label>
    </div>
  );
};

export default ContactsFooter;
