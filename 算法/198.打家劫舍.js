/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  // 创建累计数组，动态规划常见操作
  const memo = [];
  // 涉及到i，和i-2，所以区分开i=0和i=1
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    // 动态规划最重要是寻找最小循环单元，通过memo换算，叠加
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }
  return memo[nums.length - 1];
};
// @lc code=end
