export function updateEvery(milliseconds: number, fn: () => void) {
  setInterval(fn, milliseconds);
}
