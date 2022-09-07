import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T) {
  const previous = useRef<T>();

  useEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
}

export default usePrevious;
