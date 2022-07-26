/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length == 0) return [];
  const res:string[] = [];
  const map = {//建立电话号码和字母的映射关系
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const dfs = (currStr:string, l) => {
    if (l > digits.length - 1) {
      res.push(currStr)
      return
    }
    const letters = map[digits[l]]
    for (const letter of letters) {
      dfs(currStr + letter, l + 1)
    }
  }
  dfs('', 0)
  return res
};

// @lc code=end

