/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const res = nums.sort((a, b) => b + "" + a - (a + "" + b)).join("");
  return res.startsWith("0") ? "0" : res;
};
// @lc code=end
