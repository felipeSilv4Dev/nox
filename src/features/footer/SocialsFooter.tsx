import * as FeatherIcon from 'feather-icons-react';

const SocialsFooter = () => {
  const stylesBase =
    'border-black-500 hover:bg-black-500 desktop-1:p-4 block w-fit cursor-pointer border-2 p-3   text-blue-200';

  return (
    <section className="col-span-full space-y-4">
      <h2 className='tablet:text-xl font-["Bruno_Ace"] text-[18px] text-white'>
        folow us
      </h2>
      <div className="tablet:w-fit tablet:gap-4 flex w-full justify-between">
        <span className={stylesBase}>
          <FeatherIcon.Share className="tablet:h-6 h-5" />
        </span>

        <span className={stylesBase}>
          <FeatherIcon.Instagram className="tablet:h-6 h-5" />
        </span>

        <span className={stylesBase}>
          <FeatherIcon.Linkedin className="tablet:h-6 h-5" />
        </span>

        <span className={stylesBase}>
          <FeatherIcon.Twitter className="tablet:h-6 h-5" />
        </span>
      </div>
    </section>
  );
};

export default SocialsFooter;
