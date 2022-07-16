/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *最简单的解法是Math.min(...nums)，一次就行
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // return Math.min(...nums);
  if (nums.length === 1) return nums[0];
  let left = 0,
    right = nums.length - 1;
  if (nums[right] > nums[0]) return nums[0];
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
// @lc code=end
