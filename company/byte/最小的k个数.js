/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-25 23:03:30
 * @LastEditors: camus
 * @LastEditTime: 2021-01-25 23:07:09
 */
// [4,5,1,6,2,7,3,8],4
function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (k > input.length) {
    return [];
  }
  const sortArr = input.sort((a, b) => a - b);
  return sortArr.slice(0, k);
}
console.log(
  "GetLeastNumbers_Solution",
  GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4)
);
