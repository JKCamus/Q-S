/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  let isValid = true, preVal = -Infinity
  const dfs = (root: TreeNode | null) => {
    if (root === null || !isValid) return
    dfs(root.left)
    if (preVal >= root.val) {
      isValid = false
      return
    }
    preVal=root.val
    dfs(root.right)
  }
  dfs(root)
  return isValid
};
// @lc code=end

