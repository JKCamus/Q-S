/*
 * @lc app=leetcode.cn id=419 lang=typescript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
function countBattleships(board: string[][]): number {
    let result = 0
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'X') {
                result++
                dfs(row,col)
            }
        }
    }

    function dfs(row:number, col:number) {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== 'X') {
            return
        }
        board[row][col] = '.'
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }
    return result
};
// @lc code=end

