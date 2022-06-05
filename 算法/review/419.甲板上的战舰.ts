/*
 * @lc app=leetcode.cn id=419 lang=typescript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
function countBattleships(board: string[][]): number {
  let result = 0
  const dfs = (row: number, col: number) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] === '.') {
      return
    }
    board[row][col] = '.'
    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'X') {
        result += 1
        dfs(row,col)
      }
    }
  }
  return result
};
// @lc code=end
console.log(countBattleships ([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]));

