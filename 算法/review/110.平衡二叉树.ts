/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  let flag = true
  let maxHeight = (root: TreeNode | null) => {
    if (root === null) return true
    let left = maxHeight(root.left)
    let right = maxHeight(root.right)
    if (Math.abs(left - right) > 1) {
      flag = false
    }
    return Math.max(left, right) + 1
  }
  maxHeight(root)
  return flag
};
// @lc code=end

