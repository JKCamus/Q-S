/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * @resolve 贪心算法最优
 *  0,1,2,3,4   i
 * [2,3,1,1,4]  nums[i]
 * [3,2,1,0,4]
 * *从后往前，最后一个
 *
 */
var canJump = function (nums) {
  let maxJump = nums.length - 1;
// 从倒数第二个开始，因为最后一个已经到了
// 由后往前，从对的开始。
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= maxJump) {
      maxJump = i;
    }
  }
  return maxJump === 0;
};
// @lc code=end
console.log(canJump([1]));
