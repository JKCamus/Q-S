/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-04 17:38:43
 * @LastEditors: camus
 * @LastEditTime: 2020-12-07 09:59:37
 */
let needSort = [
  {
    x: 1,
    y: 2,
  },
  {
    x: 1,
    y: 3,
  },
  {
    x: 3,
    y: 2,
  },
  {
    x: 2,
    y: 3,
  },
  {
    x: 1,
    y: 5,
  },
  {
    x: 1,
    y: 8,
  },
  {
    x: 5,
    y: 2,
  },
];

let sortFunc = (a, b) => {
  if (a.y === b.y) {
    return a.x - b.x;
  }
  return a.y - b.y;
};

let newArray = needSort.sort(sortFunc);

console.log("res", newArray);

