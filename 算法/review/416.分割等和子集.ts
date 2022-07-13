/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */


/**
 * @description:
 * 转为背包问题
 * 不完全背包问题
 * nums物品，sum=》target=》背包
 */
// @lc code=start
function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((p, v) => p + v, 0)
  // 必须是偶数
  if (sum % 2) return false

  const dp = Array(sum + 1).fill(false)
  dp[0] = true
  sum = sum / 2
  // 非完全背包问题，外层循环物品
  for (let i = 0; i <= nums.length; i++) {
    // 非完全背包问题，内层循环背包，每个物品只用一次，倒序
    for (let j = sum; j >= 0; j--) {
      // true||false问题，dp[i] = dp[i] or dp[i-num]
      dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]])
    }
  }
  return dp[sum]
};
// @lc code=end
console.log(canPartition([1, 2, 5]));

