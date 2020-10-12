/* LeetCode 53动态规划 */
// let nums =[-2,1,-3,4,-1,2,1,-5,4]
// var maxSubArray = function(nums) {
// if(!nums.length)return
// let max_here=nums[0]
// let max_c=nums[0]
// for(let i=1;i<nums.length;i++){
//     max_here=Math.max(nums[i],max_here+nums[i])
//     max_c=Math.max(max_c,max_here)
// }
// return max_c
// };
// console.log('res', maxSubArray(nums))

/**
 * @description: LeetCode
 * 
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
示例 1:
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
 * @param {type} 
 * @return {type} 
 * @author: camus
 */
var plusOne = function (digits) {
  test(digits, 0, digits.length - 1);
};

function test(digits, start, end) {
  if (digits[end] !== 9) {
    digits[end] += 1;
    return;
  }
  digits[end] = 0;
  if (start === end) {
    digits.unshift(1);
  } else {
    test(digits, start, end - 1);
  }
}
