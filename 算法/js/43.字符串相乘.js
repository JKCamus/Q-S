/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 0乘以任何数 = 0
// 两数相乘，乘积的长度一定 <= 两数长度之和
// 被乘数的一位 与 乘数的每一位相乘，乘积不会超过 9 x 9 = 81，不超过两位
// 每次只考虑两位，乘积 与 个位 相加
// 个位保留余数
// 十位保留取整，取整直接舍弃小数点，用0 |效率，高于parseInt
// while循环，删除多余的0
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let l1 = num1.length,
    l2 = num2.length,
    res = new Array(l1 + l2).fill(0);
  for (let i = l1; i--; ) {
    for (let j = l2; j--; ) {
      let temp = num1[i] * num2[j] + res[i + j + 1];
      res[i + j + 1] = temp % 10;
      res[i + j] += 0 | (temp / 10);
    }
  }

  while (res[0] === 0) {
    res.shift();
  }
  return res.join("");
};
// @lc code=end
