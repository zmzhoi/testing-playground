import { RefObject } from 'react';

import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import useOutSideClick from '../hooks/useOutsideClick';

describe('useOutsideClick.ts', () => {
  const user = userEvent.setup();
  const ref = {
    current: {
      contains: jest.fn().mockReturnValue(false),
    },
  } as unknown as RefObject<HTMLElement>;

  it('Callback should not be called if it is disabled', async () => {
    const disabled = true;
    const onClickOutSide = jest.fn();

    renderHook(() => useOutSideClick({ ref, onClickOutSide, disabled }));

    expect(onClickOutSide).not.toHaveBeenCalled();

    await user.click(window.document.body);

    expect(onClickOutSide).not.toHaveBeenCalled();
  });

  it('Callback should be called when outside clicked', async () => {
    const disabled = false;
    const onClickOutSide = jest.fn();

    renderHook(() => useOutSideClick({ ref, onClickOutSide, disabled }));

    expect(onClickOutSide).not.toHaveBeenCalled();

    await user.click(window.document.body);

    expect(onClickOutSide).toHaveBeenCalledTimes(1);
  });

  it('Callback should not be called when inside clicked', async () => {
    const disabled = false;
    const onClickOutSide = jest.fn();
    const ref = {
      current: {
        contains: jest.fn().mockReturnValue(true), // inside, not outside
      },
    } as unknown as RefObject<HTMLElement>;

    renderHook(() => useOutSideClick({ ref, onClickOutSide, disabled }));

    expect(onClickOutSide).not.toHaveBeenCalled();

    await user.click(window.document.body);

    expect(onClickOutSide).not.toHaveBeenCalled();
  });
});
