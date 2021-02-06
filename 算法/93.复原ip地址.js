/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  // 需要优化
  function isValid(s) {
    if (!s.length) {
      return false;
    }
    return 0 <= +s && +s <= 255 && (s.length > 1 ? !!+s[0] : true);
  }

  function fn(remain, temp, result) {
    if (temp.length === 3) {
      isValid(remain) && result.push([...temp, remain].join("."));
    }
    for (let i = 1; i < 4; i++) {
      isValid(remain.substr(0, i)) &&
        fn(remain.substr(i), [...temp, remain.substr(0, i)], result);
    }
  }

  if (s.length > 12) return [];
  const result = [];
  fn(s, [], result);
  return result;
};
// @lc code=end
