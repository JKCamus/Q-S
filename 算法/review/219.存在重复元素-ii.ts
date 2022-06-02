/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const mapping = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (mapping.has(nums[i]) && (i - mapping.get(nums[i])) <= k) {
      return true
    } else {
      mapping.set(nums[i], i)
    }
  }
  return false
};
// @lc code=end

console.log(containsNearbyDuplicate( [1,2,3,1], 3));
