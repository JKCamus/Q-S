//! 快速排序，二分法
// 快速排序是不稳定的，因为可能会交换相同的关键字。
// 快速排序是递归的，
// 特殊情况：left>right,直接退出。
// 经过一次排序，base就能找到自己的位置，左边都是比标杆小的，右边都是比标杆大的
/* 时间复杂度
最好的情况：每一次base值都刚好平分整个数组，O(nlogn)
最坏的情况：每一次base值都是数组中的最大/最小值，O(n2) */
/* 空间复杂度
快速排序是递归的，需要借助栈来保存每一层递归的调用信息，所以空间复杂度和递归树的深度一致
最好的情况：每一次base值都刚好平分整个数组，递归树的深度O(logn)
最坏的情况：每一次base值都是数组中的最大/最小值，递归树的深度O(n) */
function quickSortRecursion(arr) {
  if (!arr || arr.length < 2) return arr;
  const pivot = arr.pop();
  let left = arr.filter((item) => item < pivot);
  let right = arr.filter((item) => item >= pivot);
  return [...quickSortRecursion(left), pivot, ...quickSortRecursion(right)];
}
let arr = [1, 2, 3, 4, -100, 0];
quickSortRecursion(arr);

console.log(arr);
//消耗空间太大，快排应该是原地排序，不应该每次迭代都生成两个新数组
// let qsort = fn => ([x, ...xs]) => x == null ? [] : [
//   ...qsort(fn)(xs.filter(a => fn(a, x))),
//   x,
//   ...qsort(fn)(xs.filter(a => !fn(a, x)))
// ]
// let arr = [2, 0, 2, 1, 1, 0, -100, 22, ]
// arr = qsort((a, b) => a < b)(arr)
// console.log(arr);
