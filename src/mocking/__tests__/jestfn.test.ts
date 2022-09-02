it('jest.fn', () => {
  const fn = jest.fn(); // mock function이 아니면, matcher 함수가 제대로 동작하지 못하고 테스트에 실패한다.

  fn(1);
  fn(2);
  fn('foo');
  fn('bar');

  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledTimes(4);

  /**
   * 호출한 순서대로 작성하지 않아도 된다.
   */
  expect(fn).toHaveBeenCalledWith('foo');
  expect(fn).toHaveBeenCalledWith(1);
  expect(fn).toHaveBeenCalledWith('bar');
  expect(fn).toHaveBeenCalledWith(2);
});
