/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {

  if(x<0)return false
  let num=0,origin=x
  while(origin!==0){
    num=num*10+(origin%10)
    origin=Math.floor(origin/10)
  }
  return num===x
};
// @lc code=end
