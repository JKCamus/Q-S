/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  const totalLen = nums.length
  // 这里是数组的index
  let maxJump = totalLen - 1
  // 从倒数第二个开始，因为最后一个已经到了
  // 由后往前，从对的开始。
  for (let i = totalLen - 2; i >= 0; i--) {
    if (nums[i] + i >= maxJump) {
      maxJump = i
    }
  }
  const canJump = maxJump === 0
  return canJump
  // !bottom up
  // const totalLen = nums.length
  // const memo = Array(totalLen).fill(0)
  // memo[totalLen - 1] = 1
  // for (let i = totalLen - 2; i >= 0; i--) {
  //   const maxJump = Math.min(i + nums[i], totalLen - 1)
  //   for (let j = i + 1; j <= maxJump; j++) {
  //     if (memo[j] === 1) {
  //       memo[i] = 1
  //       break
  //     }
  //   }
  // }
  // if (memo[0] === 1) {
  //   return true
  // } else {
  //   return false
  // }
};
// @lc code=end

console.log(canJump([1]));


