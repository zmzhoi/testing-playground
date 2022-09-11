import { useEffect } from 'react';

function useUnmount(callback: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => callback, []);
}
export default useUnmount;
