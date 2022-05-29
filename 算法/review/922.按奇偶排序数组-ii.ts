/*
 * @lc app=leetcode.cn id=922 lang=typescript
 *
 * [922] 按奇偶排序数组 II
 */
/**
 * @description:
 * 与按就排序数组1思路类似，通过控制两枚指针
 * 1. 偶数奇数指针指针i=0,i+=2.j=1,j+=2
 * 2. 偶数指针碰到偶数可以直接跳，奇数也是，直到碰到偶数停在奇数上，开始检查奇数指针，奇数指针在奇数，就跳，不是就换
 */
// @lc code=start
function sortArrayByParityII(nums: number[]): number[] {
  const isOdd = (num: number) => num % 2 > 0
  let j = 1
  for (let i = 0; i < nums.length; i += 2) {
    if (isOdd(nums[i])) {
      //注意，边界考虑
      while (isOdd(nums[j]) && j < nums.length) {
        j += 2
      }


      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  return nums
};
// @lc code=end

console.log(sortArrayByParityII([4,2,5,7]));
