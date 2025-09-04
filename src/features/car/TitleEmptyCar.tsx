import { useNavigate } from 'react-router';

const TitleEmptyCar = () => {
  const navigate = useNavigate();
  return (
    <h2 className="text-black-200 tablet:text-2xl font-semibold capitalize">
      add items in your car -
      <span
        className="cursor-pointer py-4 text-blue-500 transition-all duration-75 ease-linear hover:text-blue-200"
        onClick={() => navigate('/')}
      >
        {' '}
        go to Home
      </span>
    </h2>
  );
};

export default TitleEmptyCar;
