import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from '../hooks/useToggle';

// import { renderHook } from "@testing-library/react"

describe('useToggle', () => {
  it('Initialize toggle', async () => {
    const { result } = renderHook(() => useToggle(true));

    const [toggle] = result.current;
    expect(toggle).toBe(true);
  });

  it('Update toggle onToggle', async () => {
    const { result } = renderHook(() => useToggle(true));

    const [_, onToggle] = result.current;

    act(() => onToggle());

    const [toggle] = result.current;
    expect(toggle).toBe(false);
  });
});
