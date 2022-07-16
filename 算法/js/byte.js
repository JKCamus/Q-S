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

// let s = 7,
//   nums = [2, 3, 1, 2, 4, 3];
// /* 维护下标 */
// var minSubArrayLen = function (s, nums) {
//   const len = nums.length;
//   let row = 0;
//   let min = len + 1;
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     sum += nums[i];
//     while (sum >= s) {
//       sum -= nums[row];
//       min = Math.min(i - row + 1, min);
//       row++;
//     }
//   }
//   return min === len + 1 ? 0 : min;
// };
// console.log("min", minSubArrayLen(s, nums));
/**
 * @description: 滑动窗口 424 中等
 * @param {*}
 * @return {*}
 * @author: camus
 */
var characterReplacement = function (s, k) {
  let maxChar = 0,
    start = 0,
    maxLength = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map[char]) {
      map[char] = 0;
    }
    map[char] += 1;
    /* 计算最大重复的字符 */
    maxChar = Math.max(maxChar, map[char]);
    console.log('map', map)
    // 当前遍历过字符的长度如果大于最大重复字符 + 可替换的字符 K，就右移窗口
    if (i - start + 1 - maxChar > k) {
      const startChar = s[start++];
      map[startChar] -= 1;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};
let s = "AABABBA",
  k = 1;
console.log("111", characterReplacement(s, k));
