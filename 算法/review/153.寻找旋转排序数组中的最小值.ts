/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
  // 边界处理
  if (nums.length === 1) return nums[0];
  let left = 0, right = nums.length - 1

  if (nums[left] < nums[right]) {
    return nums[left]
  }
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1]
    } else if (nums[mid - 1] > nums[mid]) {
      return nums[mid]
    }
    // 不好理解
    if (nums[mid] > nums[left]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
};
// @lc code=end

