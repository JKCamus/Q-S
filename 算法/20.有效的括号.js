/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (const curr of s) {
    if (map[curr]) {
      stack.push(curr);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const top = stack[stack.length - 1];
      if (map[top] === curr) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length===0
};
// @lc code=end
