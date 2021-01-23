/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  // A 中一半整数是奇数，一半整数是偶数
  let j = 1;
  for (let i = 0; i < A.length; i += 2) {
    // i为偶数位，当偶数位为奇数的时候是需要换位置的情况
    if (A[i] % 2 === 1) {
      // 那么，进行循环，知道找到A[j]为奇数
      while (A[j] % 2 === 1 && j < A.length) {
        j += 2;
      }
      // 找到A[j]为奇数后，进行交换
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  return A;
};
// @lc code=end
