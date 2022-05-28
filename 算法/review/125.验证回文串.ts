/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */


/**
 * @description:
 * 思路：两指针前后向中间走，不相等的为
 * 注意：
 * 1. 边界考虑
 * 2. j指针咋末尾
 * 3. i++ j--
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const st = s.toLowerCase().replace(/[\W_]/g, '')
  if (st.length < 2) {
    return true
  }

  let i = 0, j = st.length - 1
  while (i < j) {
    if (st[i] !== st[j]) {
      return false
    }
    i ++
    j --
  }
  return true

};
// @lc code=end

console.log(isPalindrome("A man, a plan, a canal: Panama"));
