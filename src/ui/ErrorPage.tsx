import ContainerError from '../features/error/ContainerError';

const ErrorPage = () => {
  return (
    <section className="bg-black-900 text-white-100 h-screen font-['Assistant']">
      <ContainerError />
    </section>
  );
};

export default ErrorPage;
