/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const memo = []
  memo[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i], memo[i - 1] + nums[i])
  }
  const max = Math.max(...memo)
  return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// @lc code=end

