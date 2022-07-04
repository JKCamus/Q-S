/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
if(n===0)return 1
if(n<0){
  return 1/myPow(x,-n)
}
if(n%2){
  return x*myPow(x,n-1)
}
return myPow(x*x,n/2)
};
// @lc code=end

