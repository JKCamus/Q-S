/*
 * @lc app=leetcode.cn id=134 lang=javascript
  强解释为O2,就是n个加油站走n次
  其实，油量不支持走到当前加油站的，之前的加油站肯定是不行的，因为起步的时候为0，而走到当前时currentGas是大于等于0的
  所以，当走不能走到当前油站的时候，直接跳过当前，走到了下一个，
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0,
    totalCost = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }
  // 所有油-所有油耗
  if (totalGas < totalCost) return -1;
  let start = 0;
  let currentGas = 0;
  for (let i = 0; i < gas.length; i++) {
    currentGas = currentGas - cost[i] + gas[i];
    //关键步骤
    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }
  return start
};
// @lc code=end
