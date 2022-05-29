/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const memoSet = new Set()
  let maxLen = 0
  let i = 0, j = 0
  if (s.length === 0) {
    return
  }
  for (i; i < s.length; i++) {
    if (!memoSet.has(s[i])) {
      memoSet.add(s[i])
      maxLen = Math.max(memoSet.size, maxLen)
    } else {
      while (memoSet.has(s[i])) {
        memoSet.delete(s[j])
        j += 1
      }
      memoSet.add(s[i])
    }
  }
  return maxLen
};
// @lc code=end

