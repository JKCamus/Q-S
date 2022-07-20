/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @description:
 * 前序遍历：根-左-右
 * 中序遍历： 左-根-右
 * 首先通过前序遍历获取到根节点值，再获取根节点再中序遍历中的index。
 * 则可以通过前中序遍历去重建二叉树。前中序的index只差一个根节点序号。
 * @param {number} preorder
 * @param {number} inorder
 * @return {*}
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;//递归退出条件
  const temp = preorder[0],//根节点
    mid = inorder.indexOf(temp);//根节点在中序遍历中的下标
  const root = new TreeNode(temp);//重建节点
  // 根在中序的mid，那左子树个数就有mid+1个（前序）
  // 前序遍历截取第1个到第mid=1就是左子树，中序第0个到第mid个是左子树
  root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid));
  // 前序遍历截取从mid+1个到最后为右子数，中序遍历第mid到最后是右子树
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}
// @lc code=end
