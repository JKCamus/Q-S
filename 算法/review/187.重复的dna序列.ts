/*
 * @lc app=leetcode.cn id=187 lang=typescript
 *
 * [187] 重复的DNA序列
 */
/**
 * @description:
 * 思路：
 * 1. 滑窗，截取长度为10 的字符串作为滑窗，比对。
 * 2.创建map，如果map没有当前滑窗字符串，加入进去，有进行操作，推入结果
 * !注意
 * 1. 边界，循环的边界需要考虑清楚
 *
 */
// @lc code=start
function findRepeatedDnaSequences(s: string): string[] {
  const mapping = new Map()

  const result = []

  for (let i = 0; i <=s.length - 10; i++) {
    const dna = s.substring(i, i + 10)
    if (!mapping.has(dna)) {
      mapping.set(dna, 1)
    } else if (mapping.get(dna) === 1) {
      mapping.set(dna, 2)
      result.push(dna)
    } else if (mapping.get(dna) > 1) {
      mapping.set(dna, mapping.get(dna) + 1)
    }
  }


  return result
};
// @lc code=end

console.log(findRepeatedDnaSequences('AAAAAAAAAAA'));
