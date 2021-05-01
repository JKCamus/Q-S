/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true; //先假设所有二叉树为平衡二叉树
  let maxHeight = (r) => {
    if (!r) return true; //节点不存在，高度为0
    let left = maxHeight(r.left);
    let right = maxHeight(r.right); //求出左右子树高度
    if (Math.abs(left - right) > 1) {
      flag = false; //高度差超过1时，非平衡二叉树，直接false
    }
    return Math.max(left, right) + 1; //加一因为要加上父节点高度
  };
  maxHeight(root);
  return flag;
};
// @lc code=end
