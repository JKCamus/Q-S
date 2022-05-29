/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false

  let SGoal = s + s
  if (SGoal.includes(goal)) {
    return true
  } else {
    return false
  }
};
// @lc code=end

