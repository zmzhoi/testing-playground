const Calculator = {
  add(a: number, b: number) {
    return a + b;
  },
};

it('Calculator add', () => {
  jest.spyOn(Calculator, 'add');

  const result1 = Calculator.add(1, 2);
  const result2 = Calculator.add(10, 50);

  expect(Calculator.add).toHaveBeenCalled();
  expect(Calculator.add).toHaveBeenCalledTimes(2);
  expect(Calculator.add).toHaveBeenCalledWith(10, 50);
  expect(Calculator.add).toHaveBeenCalledWith(1, 2);
  expect(result1).toBe(3);
  expect(result2).toBe(60);
});
