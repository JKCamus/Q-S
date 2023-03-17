/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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

/**
 * @description: 使用队列优化递归深度
 * @param {TreeNode} root
 * @return {*}
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  const queue: Array<TreeNode> = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current !== null) {
      let temp = current.left;
      current.left = current.right;
      current.right = temp;
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  return root;
}
// @lc code=end
