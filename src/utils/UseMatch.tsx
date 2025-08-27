import React from 'react';

const UseMatch = (value: string) => {
  const [match, setMatch] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${value})`);

    setMatch(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setMatch(e.matches);

    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [value]);

  return match;
};

export default UseMatch;
