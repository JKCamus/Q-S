/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * @return {number}
 */
var sumNumbers = function (root) {
  const helper = (root, curr) => {
    if (root === null) return 0;
    curr = 10 * curr + root.val;
    if (root.left === null && root.right === null) {
      return curr;
    }
    return helper(root.left, curr) + helper(root.right, curr);
  };
  return helper(root, 0);
};
// @lc code=end
