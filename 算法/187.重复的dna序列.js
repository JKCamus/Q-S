/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *滑窗，因为比较简单，所以一枚指针就可以了
  三种情况，首先是map中没有，则添加，第二种是有了一次，就加一并添加到结果中，因为结果返回的
  是一个不重复的数组，所以，分开1次跟后面的几次的情况
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const map = new Map();
  let result = [];
  for (let i = 0; i < s.length; i++) {
    const dna = s.substring(i, i + 10);

    if (!map.has(dna)) {
      map.set(dna, 1);
    } else if (map.get(dna) === 1) {
      map.set(dna, 2);
      result.push(dna);
    } else {
      map.set(dna, map.get(dna) + 1);
    }
  }
  return result;
};
// console.log(
//   "-------",
//   findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
// );
// @lc code=end
