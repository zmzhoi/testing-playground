export function timer(callback: () => void, delay: number) {
  setTimeout(() => {
    callback();
  }, delay);
}
