/* 可以放入数组，延伸=》数组去重 let arr=[...new Set(arr)] */
let A = new Set([2, 3, 4, 6]);
let B = new Set([2, 8, 0]);
B.add(8);
/**
 * @description: 用set实现并集
 * @param {*}
 * @return {*}
 * @author: camus
 */
// let unionAB = new Set([...A,...B]);
// /* 上面的方法更简洁 */
// // for (let a of A) unionAB.add(a);
// // for (let b of B) unionAB.add(b);
// console.log("并集unionAB", unionAB);//并集unionAB Set(6) { 2, 3, 4, 6, 8, 0 }
/**
 * @description: 用set模拟交集
 * @param {*}
 * @return {*}
 * @author: camus
 */
let intersectionAB = new Set();
const intersection = (A, B) => {
  for (let a of A) {
    if (B.has(a)) intersectionAB.add(a);
  }
};
intersection(A, B);
// console.log("交集intersection", intersectionAB);//交集intersection Set(1) { 2 }
/**
 * @description: 用set实现差集,需要借助交集，并集
 * @param {*}
 * @return {*}
 * @author: camus
 */
let unionAB = new Set([...A, ...B]);
const differenceAB = (A, B) => {
  let difference = new Set();
  for (let x of unionAB) {
    if (!intersectionAB.has(x)) difference.add(x);
  }
  return difference;
};
console.log("差集differenceAB", differenceAB(A, B));
