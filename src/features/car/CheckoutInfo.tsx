interface CheckoutInfoProps {
  title: string;
  value: string;
  styles?: string;
}
const CheckoutInfo = (infos: CheckoutInfoProps) => {
  return (
    <div
      className={`${infos.styles} text-black-100 flex items-center justify-between font-bold`}
    >
      <h3 className="capitalize">{infos.title}</h3>
      <p className="text-white-100 capitalize">{infos.value}</p>
    </div>
  );
};

export default CheckoutInfo;
