import { useNavigate } from 'react-router';

const EmptyCar = () => {
  const navigate = useNavigate();

  return (
    <article className="mt-8 flex h-[68vh] flex-col items-center justify-center gap-4 text-xl">
      <img src="./icon-page-car.svg" alt="icon page car" className="h-56" />
      <h2 className="text-black-200 font-semibold capitalize">
        add items in your car -
        <span className="py-4 text-blue-500" onClick={() => navigate('/')}>
          {' '}
          go to Home
        </span>
      </h2>
    </article>
  );
};

export default EmptyCar;
