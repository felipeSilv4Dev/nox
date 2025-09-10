interface ErrorMessageProps {
  message: string;
  codeError: number;
}
const ErrorMessage = ({ message, codeError }: ErrorMessageProps) => {
  const error = new Error(`%${codeError}%${message}`);
  throw error;
};

export default ErrorMessage;
