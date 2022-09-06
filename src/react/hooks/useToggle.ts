import { useCallback, useState } from 'react';

function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);
  const onToggle = useCallback(() => setToggle((toggle) => !toggle), []);

  return [toggle, onToggle] as const;
}

export default useToggle;
