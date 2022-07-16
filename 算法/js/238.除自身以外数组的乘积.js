/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *难度较大，需要记住公式
  !正常可以使用两个数组维护正反序，进阶使用解约空间则，使用变量解决。
  ! 此题需要多加回顾，动态规划。
  以i为分界，从左的乘积*从右开始的乘积，就是结果
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 为了不影响乘积，初始化为1
  let result = Array(nums.length).fill(1);
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product * result[i];
    product = product * nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = product * result[i];
    product = product * nums[i];
  }
  return result;
};
// @lc code=end
