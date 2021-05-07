/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//状态转移方程：
//这道题比较直观，当问题的规模逐渐变大时候，取以 nums[i] 结尾的最长上升子序列集合最大值就可以了；
//也就是以nums[i]结尾，不断的去找前面比自己小的，这样就总能找出最长的了

var lengthOfLIS = function (nums) {
  let n = nums.length;
  if (n < 2) return n;
  const memo = new Array(n).fill(1);
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        memo[i] = Math.max(memo[i], memo[j] + 1);
      }
    }
  }
  return Math.max(...memo);
};

// @lc code=end
