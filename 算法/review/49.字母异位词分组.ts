/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */
/**
 * @description:
 * 思路
 * 1. 检查数组是否为空
 * 2. 建立一个长为26，填充为0的数组
 * 3. 遍历所有字符串中字母出现的频率，放到数组对应的位置（通过ascii码 -97）
 * 4。通过数组生成可以，按相同的字母出现的频率进行归类
 * 5。 遍历map返回结果
 */
// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const mapping = new Map()

  for (let str of strs) {
    // es6语法，创建一个长度为26的数组，并填上0
    const temp = Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      // 常用字母统计方法,使用ascii码,减去97为为数组的下标号,之后对字母进行统计
      const ascii = str.charCodeAt(i) - 97

      temp[ascii] += 1
    }
    // 原题目，为空格，但是当字母个数大于10，那么就会发生错误。所以，需要将其用逗号分开，作为key值
    /* ["bdddddddddd", "bbbbbbbbbbc"]超过了10个,则会形成如下数组
        ascii [
        0, 1, 0, 10, 0, 0, 0, 0,
        0, 0, 0,  0, 0, 0, 0, 0,
        0, 0, 0,  0, 0, 0, 0, 0,
        0, 0
      ]
      ascii [
        0, 10, 1, 0, 0, 0, 0, 0,
        0,  0, 0, 0, 0, 0, 0, 0,
        0,  0, 0, 0, 0, 0, 0, 0,
        0,  0
      ]
      转为字符串后,会导致两个相同,
    ascii 010100000000000000000000000
    ascii 010100000000000000000000000
    */
    const key = temp.join('')

    if (mapping.has(key)) {
      mapping.set(key, [...mapping.get(key), str])
    } else {
      mapping.set(key, [str])
    }
  }
  const result = []
  for (const item of mapping) {
    result.push(item[1])
  }
  return result

};
// @lc code=end
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


