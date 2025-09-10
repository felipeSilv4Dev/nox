import { useRouteError } from 'react-router';
import ContainerError from '../features/error/ContainerError';
import TitleError from '../features/error/TitleError';

const ErrorPage = () => {
  const error = useRouteError();
  let textMessage;
  let codeError;
  if (error instanceof Error) {
    const { message } = error;
    const errorMessage = message.split('%');
    textMessage = errorMessage[2];
    codeError = errorMessage[1];
  }

  return (
    <section className="bg-black-900 text-white-100 h-screen font-['Assistant']">
      <ContainerError>
        <TitleError> {codeError ? codeError : 404}</TitleError>
        <p className="text-black-100 tablet:text-2xl mb-4 text-xl capitalize">
          {textMessage ? textMessage : 'page not found'}
        </p>
      </ContainerError>
    </section>
  );
};

export default ErrorPage;
