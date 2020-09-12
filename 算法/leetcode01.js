/* 两数求和，使用逆向思维 ，但是只能返回一个答案*/
// !解法1
// let nums = [2, 7, 11, 15];
// let target = 9;
let nums = [3, 2, 4, 15];
let target = 6;
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i];
    let j = nums.indexOf(rest);
    if (j >= 0&&i!=j) {
      return [i, j];
    }
    // return [];
  }
};

console.log('rrrr', twoSum(nums,target))
// !解法2
// let nums = [3, 2, 4, 15,5,1];
// let target = 6;
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
//   return [];
// };
// console.log('rrrr', twoSum(nums,target)) 

/* 2 */
// let num = 1222;
// let red = `${1222}`.split("").map(Number);
// let aj = new ListNode(null);

// console.log("22", aj);
