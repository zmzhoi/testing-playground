test('welcome', () => {
  function welcome() {
    return 'welcomen to test world!';
  }

  expect(welcome()).toBe('welcomen to test world!');
});
