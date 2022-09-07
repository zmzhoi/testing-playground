import { renderHook } from '@testing-library/react-hooks';
import usePrevious from '../hooks/usePrevious';

type PropType = { [key: string]: any } | undefined;

describe('usePrevious.ts', () => {
  it('Initial value must be null', async () => {
    const { result } = renderHook(() => usePrevious({ name: 'Choi' }));

    expect(result.current).toBeUndefined();
  });

  it('Previous value must be correct', () => {
    let prevProp: PropType = undefined;
    let prop: PropType = { name: 'Choi' };
    const { result, rerender } = renderHook(() => usePrevious(prop));

    expect(result.current).toEqual(prevProp);

    prevProp = prop;
    prop = { name: 'Kim' };
    rerender(prop);
    expect(result.current).toEqual(prevProp);

    prevProp = prop;
    prop = { name: 'Lee' };
    rerender(prop);
    expect(result.current).toEqual(prevProp);

    prevProp = prop;
    prop = null;
    rerender(prop);
    expect(result.current).toEqual(prevProp);

    prevProp = prop;
    prop = null;
    rerender(prop);
    expect(result.current).toEqual(prevProp);
  });
});
