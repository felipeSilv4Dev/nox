import { useMediaQuery } from 'react-responsive';

const UseMatch = (value: string) => {
  const match = useMediaQuery({ query: `(min-width: ${value})` });
  return match;
};

export default UseMatch;
