/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  // 直接进阶
  let backSpaceS = 0,
    backSpaceT = 0,
    i = S.length - 1,
    j = T.length - 1;
  while (i >= 0 || j >= 0) {
    // 通过记录backSpaceS来记录退格，借此跳过#号和需要退格的那位，
    // 当到达非#和退格位已用完，退出等待j
    // 同样，当i和j都到了非#和退位用完，进行对比
    while (i >= 0) {
      if (S[i] === "#") {
        backSpaceS++;
        i--;
      } else if (backSpaceS > 0) {
        backSpaceS--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (T[j] === "#") {
        backSpaceT++;
        j--;
      } else if (backSpaceT > 0) {
        backSpaceT--;
        j--;
      } else {
        break;
      }
    }
    if (S[i] !== T[j]) {
      return false;
    }
    i--;
    j--;
  }
  return true;
};
// console.log("backspaceCompare", backspaceCompare("xywrrmp","xywrrmu#p"));
// @lc code=end
