/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return [ map.get(nums[i]),i];
    } else {
      map.set(target-nums[i], i);
    }
  }
}
// @lc code=end
