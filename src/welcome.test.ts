function welcome() {
  return 'welcomen to test world!';
}

test('welcome', () => {
  expect(welcome()).toBe('welcomen to test world!');
});

test('1 is 1', () => {
  expect(1).toBe(1);
});
