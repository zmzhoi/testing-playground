import { renderHook } from '@testing-library/react-hooks';

import useMount from '../hooks/useMount';

describe('useMount', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const callback = jest.fn();

  it('Callback should be called on mount', () => {
    renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('Callback should be called only once', () => {
    const { rerender } = renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
    rerender(jest.fn());
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('Callback should not be called on unmount', () => {
    const { unmount } = renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
    unmount();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
