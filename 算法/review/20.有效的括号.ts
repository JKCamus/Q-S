/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */


/**
 * @description:
 * 思路
 * 1. 新建map
 * 2. 如果有当前符号，将相对应的闭合符号入栈
 * 3. 如果没有出栈一个，比对是否相同。不相同为
 * 注意：
 * 1.最后需要检查stack的长度
 * 2. 是入栈闭合的符号
 */
// @lc code=start
function isValid(s: string): boolean {
  const mappings = new Map()
  mappings.set('(', ")")
  mappings.set('{', "}")
  mappings.set('[', "]")

  let stack = []
  for (const item of s) {
    if (mappings.has(item)) {
      stack.push(mappings.get(item))
    } else {
      if (stack.pop() !== item) {
        return false
      }
    }
  }
  if (stack.length !== 0) {
    return false
  }
  return true
};
// @lc code=end


