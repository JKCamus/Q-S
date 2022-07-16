/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 * 广度遍历：按照层次一层层遍历;


 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 广度优先
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    const arr = [];
    let len=queue.length
    while (len) {
      let node = queue.shift();
      arr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
    result.push(arr);
  }
  return result;
};
// @lc code=end
