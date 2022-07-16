/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    // 避免超出int最大值left + (right - left) / 2
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
      // 移到mid左边一位
    } else if (nums[mid] > target) {
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }
  return -1
};
// @lc code=end
