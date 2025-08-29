interface ContainerPagesProps {
  title: string;
  index: number;
  active: number;
  description: string;
}
const ContainerPages = ({
  title,
  description,
  index,
  active,
}: ContainerPagesProps) => {
  return (
    <div
      className={`bg-black-800 space-y-2 opacity-0 ${index === active ? 'animate-intro' : ''}`}
    >
      <h3 className='text-white-100 font-["Bruno_Ace"] text-[18px] capitalize'>
        {title}
      </h3>
      <p className='text-white-500 w-full font-["Assistant"] text-xs'>
        {description}
      </p>
    </div>
  );
};

export default ContainerPages;
