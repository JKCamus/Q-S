/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length===0) return "";
  let res = strs[0];
  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    while (j < strs[i].length && j < res.length && strs[i][j] === res[j]) {
      j ++;
    }
    res = res.substr(0, j);
    if (res === "") {
      return res;
    }
  }
  return res;
};
console.log("res=>", longestCommonPrefix(["flower", "flow", "flight"]));
// @lc code=end
