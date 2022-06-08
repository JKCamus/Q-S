/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let l1 = num1.length,
    l2 = num2.length;
  const result = Array(l1 + l2).fill(0);
  let i = l1 - 1;
  while (i >= 0) {
    let j = l2 - 1;
    while (j >= 0) {
      const temp = Number(num1[i]) * Number(num2[j]) + result[i + j + 1];
      result[i + j + 1] = temp % 10;
      result[i + j] += 0 | (temp / 10);
      j--;
    }
    i--;
  }

  if (result[0] === 0) {
    result.shift();
  }
  return result.join('');
};
// @lc code=end

