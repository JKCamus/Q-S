/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let i = 0,
    j = A.length - 1;
  while (i < j) {
    // 进阶。不开新数组，
    // 4种情况，
    // 1.A[i]为奇数，A[j]为偶数 交换位置，这边数组结构交换位置
    // 2.A[i]为偶数，A[j]为奇数是正确的位置关系，只需要i和j继续走就行
    // 3.A[i]为奇数，A[j]为奇数 j为正确位置，不动，等待i移动
    // 4.A[i]为偶数数，A[j]为偶数 i为正确位置，等待j移动

    // if (A[i] % 2 === 1 && A[j] % 2 === 0) {
    //   [A[i], A[j]] = [A[j], A[i]];
    // } else if (A[i] % 2 === 0 && A[j] % 2 === 1) {
    //   i++;
    //   j--;
    // } else if (A[i] % 2 === 1 && A[j] % 2 === 1) {
    //   j--;
    // } else {
    //   i++;
    // }
    // 可以合并写法
    if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      [A[i], A[j]] = [A[j], A[i]];
    }
    if (A[i] % 2 === 0) {
      i++;
    }
    if (A[j] % 2 === 1) {
      j--;
    }
  }
  return A;
};
// @lc code=end
