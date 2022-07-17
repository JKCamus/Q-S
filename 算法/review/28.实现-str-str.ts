/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
if(needle.length===0)return 0
const index=haystack.indexOf(needle)
return index
};
// @lc code=end

console.log(strStr("hello","ll"));
