import { renderHook } from '@testing-library/react-hooks';

import useUnmount from '../hooks/useUnmount';

describe('useUnmount', () => {
  it('Callback should not be called on mount', () => {
    const callback = jest.fn();
    renderHook(() => useUnmount(callback));

    expect(callback).not.toHaveBeenCalled();
  });

  it('Callback should not be called on rerender', () => {
    const callback = jest.fn();
    const { rerender } = renderHook((cb) => useUnmount(cb), { initialProps: callback });

    const otherCallback = jest.fn();
    rerender(otherCallback);
    const anotherCallback = jest.fn();
    rerender(anotherCallback);

    expect(callback).not.toHaveBeenCalled();
    expect(otherCallback).not.toHaveBeenCalled();
    expect(anotherCallback).not.toHaveBeenCalled();
  });

  it('Callback should be called on unmount', () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => useUnmount(callback));

    expect(callback).not.toHaveBeenCalled();

    unmount();

    expect(callback).toHaveBeenCalled();
  });
});
