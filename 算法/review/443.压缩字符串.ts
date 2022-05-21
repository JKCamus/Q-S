/*
 * @lc app=leetcode.cn id=443 lang=typescript
 *
 * [443] 压缩字符串
 */

// @lc code=start
function compress(chars: string[]): number {
  for (let i = chars.length - 1; i >= 0; i--) {
    let sum: number = 1
    while(i>0&&chars[i]===chars[i-1]){
      sum+=1
      i--
    }
    if (sum!==1) {
      const counterArr=String(sum).split('')
      chars.splice(i+1,sum-1,...counterArr)
    }
  }
  return chars.length
};
// @lc code=end

