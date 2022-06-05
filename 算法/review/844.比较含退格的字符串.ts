/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1, j = t.length - 1
  let backspaceS = 0, backspaceT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        backspaceS += 1
        i--
      } else if (backspaceS > 0) {
        backspaceS -= 1
        i--
      } else {
        break
      }
    }
    while (j >= 0) {
      if (t[j] === '#') {
        backspaceT += 1
        j--
      } else if (backspaceT > 0) {
        backspaceT -= 1
        j--
      } else {
        break
      }
    }

    if (s[i] !== t[j]) {
      return false
    }
    i--
    j--
  }
  return true
};
// @lc code=end

console.log(backspaceCompare("bbbextm",
"bbb#extm"));
