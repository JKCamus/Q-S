/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // 匹配非单词字符,统一改为小写
  const st = s.toLowerCase().replace(/[\W_]/g, "");
  let i = 0,
    j = st.length - 1;
  while (i < j) {
    if (st[i] !== st[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
// @lc code=end
