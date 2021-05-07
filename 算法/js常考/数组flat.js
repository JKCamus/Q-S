const arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  "string",
  { name: "弹铁蛋同学" },
];
// 最简单
console.log("res=>", arr.flat(Infinity));
// 栈的形式实现
function flatten1(arr) {
  const result = [];
  // const stack = [].concat(arr);  // 将数组元素拷贝至栈，直接赋值会改变原数组
  const stack = [...arr];
  //如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val); //如果是数组再次入栈，并且展开了一层
    } else {
      result.unshift(val); //如果不是数组就将其取出来放入结果数组中
    }
  }
  return result;
}
// reduce 版本
const flatten = (array) =>
  array.reduce(
    (acc, cur) =>
      Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur],
    []
  );
console.log("flatten=>", flatten(arr));

// reduce + 递归   原型上实现，并且复刻flat的跳过空位
Array.prototype.fakeFlat = function (num = 1) {
  // if (!Number(num) || Number(num) < 0) {
  //   return this;
  // }
  // let arr = [].concat(this);
  // return num > 0
  //   ? arr.reduce(
  //       (pre, cur) =>
  //         pre.concat(Array.isArray(cur) ? cur.fakeFlat(--num) : cur),
  //       []
  //     )
  //   : arr.slice();
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = [...this];
  return num > 0
    ? arr.reduce(
        (pre, curr) =>
          Array.isArray(curr)
            ? [...pre, ...curr.flatFake(--num)]
            : [...pre, curr],
        []
      )
    : arr.slice();
};
arr.fakeFlat();
