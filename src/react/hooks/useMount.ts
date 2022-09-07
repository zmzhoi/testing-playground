import { useEffect } from 'react';

function useMount(callback: () => void) {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useMount;
