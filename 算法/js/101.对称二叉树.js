/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  } else {
    return help(root.left, root.right);
  }

  function help(L, R) {
    if (L === null && R === null) {
      return true;
      // 假如一边有值，另外一边没值,false
    } else if (L === null || R === null || L.val !== R.val) {
      return false;
    } else {
      return help(L.left, R.right) && help(L.right, R.left);
    }
  }
};
// @lc code=end
