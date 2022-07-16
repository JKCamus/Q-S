/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  path.split("/").forEach((word) => {
    if (word === ".." && stack.length !== 0) {
      stack.pop();
    } else if (word !== "" && word !== "." && word !== "..") {
      stack.push(word);
    }
  });
  return "/" + stack.join("/");
};
// @lc code=end
