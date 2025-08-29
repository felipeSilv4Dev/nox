interface ItemsProps {
  title: string;
}
interface ControlNavFooterProps {
  active: number;
  onNavNext: (index: number) => void;
  items: ItemsProps[];
}
const ControlNavFooter = (props: ControlNavFooterProps) => {
  const styleBase =
    'text-white-100 py-4 font-["Assistant"] text-sm font-semibold transition-all duration-200 ease-linear cursor-pointer hover:text-white-500';

  return (
    <nav>
      <ul className="flex items-center justify-between">
        {props.items.map((item, index) => (
          <span
            onClick={() => props.onNavNext(index)}
            key={index}
            className={`${styleBase} ${index === props.active ? 'text-white-100' : 'text-white-800'}`}
          >
            {item.title}
          </span>
        ))}
      </ul>
    </nav>
  );
};

export default ControlNavFooter;
