/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {

  let min =prices[0],profit=0

  for(let i=0;i<prices.length;i++){
    if(min>prices[i]){
      min=prices[i]
    }else if(prices[i]-min>profit){
      profit=prices[i]-min
    }
  }

  return profit


};
// @lc code=end

