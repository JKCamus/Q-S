/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    // 判断数组是否含有当前元素，有会返回大于0的index
    let index = arr.indexOf(s[i]);
    // 如果当前数组中有当前元素，则删除从数组开始到当前重复位置的元素
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    //数组推进当前字母
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max);
  }
  return max;
  /**
   * @description: set方法，思路很像
   */
  const set = new Set();
  let i = 0,
    j = 0,
    maxLength = 0;
  if (s.length === 0) {
    return 0;
  }

  for (i; i < s.length; i++) {
    // 如果set中没有当前，set加入当前元素，并且最大数量更新加一
    if (!set.has(s[i])) {
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      // 如果set中有当前元素，循环删除j，直到删除至不含当前元素
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      // 最后加入当前元素
      set.add(s[i])
    }
  }
  return maxLength
};
// @lc code=end
