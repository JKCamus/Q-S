/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 双指针也是ok
var isPalindrome = function (x) {
  // 212 47m
  // if (x < 0) return false;
  // const arr = (x + "").split("");
  // return arr.join("") === arr.reverse().join("");
  // 优化
  if (x < 0) return false;
  let sum = x,
    res = 0;
  while (sum !== 0) {
    res = res * 10 + (sum % 10);

    sum = Math.floor(sum / 10);
  console.log('res=>res', res)
  console.log('res=>sum', sum)

  }
  return res === x;
};

console.log('res=>', isPalindrome(121))
// @lc code=end
