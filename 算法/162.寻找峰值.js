/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums == null || nums.length == 0) {
    return -1;
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= nums[i - 1]) {
      return i;
    }
  }
  return 0;
};

console.log("res=>", findPeakElement([3, 4, 3, 2, 1]));
// @lc code=end
