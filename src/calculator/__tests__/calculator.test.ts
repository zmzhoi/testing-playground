import { add } from '../calculator';

test('add function test', () => {
  const result = add(1, 2);

  expect(result).toBe(3);
});
