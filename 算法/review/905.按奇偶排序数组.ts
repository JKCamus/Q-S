/*
 * @lc app=leetcode.cn id=905 lang=typescript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  const isOdd = (num: number) => num % 2 > 0

  let left = 0, right = nums.length - 1
  while (left < right) {
    if (!isOdd(nums[left]) && isOdd(nums[right])) {
      left++
      right--
    } else if (!isOdd(nums[left]) && !isOdd(nums[right])) {
      left++

    } else if (isOdd(nums[left]) && !isOdd(nums[right])) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
    } else if (isOdd(nums[left]) && isOdd(nums[right])) {
      right--
    }
  }
  return nums

};
// @lc code=end
console.log(sortArrayByParity([3, 1, 2, 4]));

