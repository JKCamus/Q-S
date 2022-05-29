/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 */

/**
 * @description:
 * 思路：
 *1.与验证回文1类似，因为可以容错，所以，需要判断i+1和j-1（因为两边字符串需要等长）
 *2. 创建helpFunc
  注意
  1. 注意left-1，right+1
  2. 循环，指针的拨动
 */
// @lc code=start
function validPalindrome(s: string): boolean {

  const isPalindrome = (left, right) => {
    let _left=left,_right=right
    while (_left < _right) {
      if (s[_left] !== s[_right]) {
        return false
      } else {
        _left++
        _right--
      }
    }
    return true
  }



  let left = 0, right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      const result = isPalindrome(left + 1, right) || isPalindrome(left, right-1)
      return result
    }
    left++
    right--
  }
  return true

}
// @lc code=end

