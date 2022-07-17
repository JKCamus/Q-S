/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */


/**
 * @description:
 * 与岛屿数量有类似，进行四个方向搜索，沉没；
 * 难点在递归搜索，回溯的条件，边界考虑
 * 1. 定义方向数组
 * 2. 循环搜索数组Board,调用help。同样是边界考虑，搜索到最后一个为止。
 * 3. 判断字符是否相等。不等返回false，相等，往下
 * 4. 沉没当前字符串。为board之外的字符。是因为题目说了不能重复，
 * 这样做也沉没了4个方向之一。
 * 5. 开始根据方向进行搜索，4个都会去搜索，但是已经沉没了一个方向。相等则返回true
 * 6. 上面不相等，复原board[row][col]=word[k]
 * 7. 返回false
 */
// @lc code=start
function exist(board: string[][], word: string): boolean {
  const w = board.length,
    h = board[0].length;

  const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const help = (row: number, col: number, k: number) => {
    if (k >= word.length) return true;
    if (row >= w || col >= h || row < 0 || col < 0) return false;
    if (board[row][col] !== word[k]) return false;
    board[row][col] = "*";
    for (let [x, y] of dir) {
      if (help(x + row, col + y, k + 1)) return true;
    }
    board[row][col] = word[k];
    return false
  };

  for (let row = 0; row < w; row++) {
    for (let col = 0; col < h; col++) {
      if(help(row, col, 0))return true
    }
  }
  return false
}
// @lc code=end
console.log('exist',exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"
) )
