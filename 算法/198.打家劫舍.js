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
  /*
  ! 动态规划可以做空间优化，当前判定空间复杂度为O(n)可以降为O(1),
  * 当前只需要使用memo[i-2]和memo[i-1]，两个变量，所以可以替换维护的数组为定义两个变量
  */
  // 创建累计数组，动态规划常见操作
  //  const memo = [];
  // 涉及到i，和i-2，所以区分开i=0和i=1
  /*   memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // 动态规划最重要是寻找最小循环单元，通过memo换算，叠加
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }
  return memo[nums.length - 1];
 */
  /*
!空间复杂度优化
*/
  let pre2 = nums[0];
  let pre1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const temp = Math.max(nums[i] + pre2, pre1);
    pre2 = pre1;
    pre1 = temp;
  }
  return pre1
};
// @lc code=end
