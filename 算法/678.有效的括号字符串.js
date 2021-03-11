/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const left = [],
    flag = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left.push(i);
    if (s[i] === "*") flag.push(i);
    if (s[i] === ")") {
      if (left.length === 0) {
        if (flag.length === 0) {
          return false;
        } else {
          flag.pop();
        }
      } else {
        left.pop();
      }
    }
  }
  if (left.length > flag.length) {
    return false;
  }

  while (left.length && flag.length) {
    if (left.pop() > flag.pop()) {
      return false;
    }
  }
  return true;
};
// @lc code=end
