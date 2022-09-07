import { RefObject, useEffect } from 'react';

interface Props<T> {
  ref: RefObject<T>[] | RefObject<T>;
  onClickOutSide: (event: MouseEvent) => void;
  disabled?: boolean;
}

function useOutSideClick<T extends HTMLElement>({
  ref,
  onClickOutSide,
  disabled = false, //
}: Props<T>) {
  useEffect(() => {
    if (disabled) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      let _refList: RefObject<HTMLElement>[];

      if (Array.isArray(ref)) {
        _refList = ref;
      } else {
        _refList = [ref];
      }

      const isOutside = _refList.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isOutside) {
        onClickOutSide(event);
      }
    };

    window.addEventListener('click', handleClick, true);

    return function cleanup() {
      window.removeEventListener('click', handleClick, true);
    };
  }, [disabled, onClickOutSide, ref]);
}

export default useOutSideClick;
