Array.prototype.fakeFlat = function (num = 1) {
  if (!Number(num) || num < 0) return this;
  let arr = [...this];
  return num>0?arr.reduce(
    (pre, curr) =>
      Array.isArray(curr) ? [...pre, curr.fakeFlat(--num)] : [...pre, ...curr],
    []
  ):arr.slice();
};
