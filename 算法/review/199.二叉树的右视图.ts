/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {

  const dfs = (root: TreeNode | null, step: number, res: number[]) => {

    if (root === null) return
    if (step === res.length) {
      res.push(root.val)
    }
    dfs(root.right, step + 1, res)
    dfs(root, step + 1, res)
  }
  if (root === null) return []
  const result: number[] = []
  dfs(root, 0, result)
  return result
};
// @lc code=end

