/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  const help = (L:TreeNode | null, R:TreeNode | null) => {
    if (L === null && R === null) {
      return true
    } else if (L === null || R === null || L.val !== R.val) {
      return false
    } else {
    return  help(L.left, R.right) && help(L.right, R.left)
    }
  }
  if (root === null) {
    return true
  } else {
    return help(root.left, root.right)
  }
};
// @lc code=end

