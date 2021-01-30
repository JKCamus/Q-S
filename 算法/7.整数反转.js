/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  if (x < 0) {
    result = -parseInt(x.toString().split("").reverse().join(""));
  } else {
    result = parseInt(x.toString().split("").reverse().join(""));
  }

  if (result <= Math.pow(-2, 31) || result >= Math.pow(2, 31) - 1) {
    result = 0;
  }
  return result;
};

// @lc code=end
