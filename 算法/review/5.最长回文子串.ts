/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */
/**
 * @description:
 * 思路 涟漪扩散
 *
 * 1. 如果字符串长度小于2，直接返回原字符串
 * 2. 定义两个变量，一个start记录其实位置
 * 3. 考虑偶数和基数
 */
// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) return s
  let start = 0, maxLen = 1
  const expandAroundCenter = (left: number, right: number) => {
    // 注意 邊界考慮,
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let len = right - left + 1
      if (len > maxLen) {
        maxLen = len
        start = left
      }
      left--
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    // 两种情况，一种是奇数，中心是回文中心，还有是偶数的，回文需要i-1和i+1
    expandAroundCenter(i - 1, i + 1)
    expandAroundCenter(i, i + 1)
  }
return s.substring(start,start+maxLen)
};
// @lc code=end

console.log(longestPalindrome("babad"));
