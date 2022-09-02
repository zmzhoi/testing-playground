function longSleep(callback: () => void) {
  setTimeout(callback, 5000);
}

jest.useFakeTimers();

describe('fakeTimer', () => {
  it('fakeTimer case1', () => {
    const callback = jest.fn();

    longSleep(callback);

    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
  });

  it('fakeTimer case2', () => {
    jest.spyOn(global, 'setTimeout');

    const callback = jest.fn();

    expect(setTimeout).not.toHaveBeenCalled();

    longSleep(callback);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(callback, 5000); // setTimeout이 호출될때 인자 검사
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000); // 윗줄 코드와 동일하지만 다른 방법.
  });
});
