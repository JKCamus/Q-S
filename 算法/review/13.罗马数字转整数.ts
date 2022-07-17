/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {

  const strMap: { [key in string]: number } = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let sum = 0,i=0,len=s.length;
  const num=(i:number)=>strMap[s[i]]


  while(i<len){
    if((num(i+1)/num(i)===10||num(i+1)/num(i)===5)){
      sum+=(num(i+1)-num(i))
      i+=2
    }else{
      sum+=num(i)
      i++
    }
  }
  return sum
};
// @lc code=end

console.log(romanToInt("MCMXCIV"));
