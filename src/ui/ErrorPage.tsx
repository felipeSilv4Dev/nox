import { useRouteError } from 'react-router';
import ContainerError from '../features/error/ContainerError';
import TitleError from '../features/error/TitleError';
import useToTop from '../utils/useToTop';

const ErrorPage = () => {
  const error = useRouteError() as Response;
  useToTop();

  return (
    <section className="bg-black-900 text-white-100 h-screen font-['Assistant']">
      <ContainerError>
        <TitleError> {error.status}</TitleError>
        <p className="text-black-100 mb-4 h-fit text-xl capitalize">
          {error.statusText}
        </p>
      </ContainerError>
    </section>
  );
};

export default ErrorPage;
