/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  if (s.length <= 1) return s.length;
  let j=0,max=0
  for(let i=0;i<s.length;i++){
    if(!set.has(s[i])){
      set.add(s[i])
      max=Math.max(max,set.size)
    }else{
      while(set.has(s[i])){
        set.delete(s[j])
        j+=1
      }
      set.add(s[i])
    }
  }
  return max
}
// @lc code=end
