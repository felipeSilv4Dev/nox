const TextNotification = ({ count }: { count: number }) => {
  return (
    <p className="text-base font-semibold lowercase">
      {count} item added into the car
    </p>
  );
};

export default TextNotification;
