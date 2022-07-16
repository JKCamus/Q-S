/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *与和最大子数组思路相近，但是又区别，就是当一个最小负数，碰到另一个负数的时候，可以比正数来的大，所以需要在存一个最小数组
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const maxProductMemo = [];
  const minProductMemo = [];
  maxProductMemo[0] = nums[0];
  minProductMemo[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 比较当前元素和原来的最大乘积和最小乘积，如果不是最大，则用当前元素替换，就是直接不使用之前的乘积了
    maxProductMemo[i] = Math.max(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );
    minProductMemo[i] = Math.min(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );
    max = Math.max(max, maxProductMemo[i]);
  }
  return max;
};

// @lc code=end
