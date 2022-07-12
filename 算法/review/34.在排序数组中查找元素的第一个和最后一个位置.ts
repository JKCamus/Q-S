/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let mid , left = 0, right = nums.length - 1;
  while (left <= right) {
     mid = Math.floor( left+ (right - left) / 2)
    if (nums[mid] === target) {
      break
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (left > right) return [-1, -1]
  let i = mid, j = mid;
  while (nums[i] === nums[i - 1]) i--
  while (nums[j] === nums[j + 1]) j++
  return [i, j]
};
// @lc code=end

