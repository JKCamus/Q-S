/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // if (!nums.length) {
  //   return 0;
  // }
  // let temp = nums[0],
  //   res = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   temp = temp < 0 ? nums[i] : temp + nums[i];
  //   res = Math.max(temp,res);
  // }
  // return res

  const memo = [];
  memo[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i], nums[i] + memo[i-1]);
  }
  let res = nums[0];
  for (let i = 1; i < memo.length; i++) {
    res = Math.max(memo[i], res);
  }

  return res;
};
// @lc code=end
