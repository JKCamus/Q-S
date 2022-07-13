/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1; let j = num2.length - 1;
  const result = []; let carry = 0
  while (i >= 0 || j >= 0 || carry !== 0) {
    const str1 = Number(num1[i])
    const str2 = Number(num2[j])
    const sum = str1 + str2 + carry
    carry = Math.floor(sum % 10)
    result.unshift(sum / 10)
    i--
    j--
  }
  return result.join('')
};
// @lc code=end

