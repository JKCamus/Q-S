/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-29 22:21:28
 * @LastEditors: camus
 * @LastEditTime: 2021-01-29 22:44:55
 */
/**
 * @description: 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）
 */
// 1=>1  4=>5
function jumpFloor(number) {
  // 当前空间复杂度为O（n），时间复杂度为O（n）
  // const memo = [1, 2];
  // for (let i = 2; i < number; i++) {
  //   memo[i] = memo[i - 1] + memo[i - 2];
  // }
  // return memo[number-1]
  // 优化空间复杂度
  if (number === 1 || number === 2) return number;
  let total1 = 1,
    total2 = 2,
    total = 0;
  for (let index = 2; index < number; index++) {
    total = total1 + total2;
    total1 = total2;
    total2 = total;
  }
  return total;
}

console.log("sss", jumpFloor(4));
