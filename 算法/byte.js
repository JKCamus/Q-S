/**
 * @description: 209,长度最小的子数组
 * @param {*}
 * @return {*}
 * @author: camus
 */
/* 维护数组 */
// var minSubArrayLen = function (s, nums) {
//   const len = nums.length;
//   let arr = [];
//   let min = len + 1;
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     arr.push(nums[i]);
//     sum += nums[i];
//     while (sum >= s) {
//       sum -= arr[0];
//       min = Math.min(arr.length, min);
//       arr.shift();
//     }
//   }
//   return min == len + 1 ? 0 : min;
// };

let s = 7,
  nums = [2, 3, 1, 2, 4, 3];
/* 维护下标 */
var minSubArrayLen = function (s, nums) {
  const len = nums.length;
  let row = 0;
  let min = len + 1;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    while (sum >= s) {
      sum -= nums[row];
      min = Math.min(i - row + 1, min);
      row++;
    }
  }
  return min === len + 1 ? 0 : min;
};
console.log("min", minSubArrayLen(s, nums));
