/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  let result = strs[0];
  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    while (
      j < strs[i].length &&
      j < result.length &&
      strs[i][j] === result[j]
    ) {
      j++;
    }
    result = result.substr(0, j);
    if (result === "") {
      return result;
    }
  }
  return result;
}
// @lc code=end


