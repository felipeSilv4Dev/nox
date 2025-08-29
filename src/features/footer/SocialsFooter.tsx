import * as FeatherIcon from 'feather-icons-react';

const SocialsFooter = () => {
  const stylesBase =
    'border-black-500 hover:bg-black-500 desktop-1:p-4 block w-fit cursor-pointer border-2 p-3 text-blue-200';

  return (
    <section className="col-span-full space-y-4">
      <h2 className='font-["Bruno_Ace"] text-[18px] text-white'>folow us</h2>
      <div className="flex w-full justify-between">
        <span className={stylesBase}>
          <FeatherIcon.Share />
        </span>

        <span className={stylesBase}>
          <FeatherIcon.Instagram />
        </span>

        <span className={stylesBase}>
          <FeatherIcon.Linkedin />
        </span>

        <span className={stylesBase}>
          <FeatherIcon.Twitter />
        </span>
      </div>
    </section>
  );
};

export default SocialsFooter;
