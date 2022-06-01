/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 0) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }
  const result = [1, ...digits]
  return result
};
// @lc code=end

console.log(plusOne([1, 2, 3]));
