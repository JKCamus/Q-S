/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 *  先找到中点，作为树根如0
 * 以中点左侧的序列递归左子树，[-10,-3]
 * 以中点右侧的序列递归右子树，[5,9]
 * 注意边界，0<=index<nums.length
 * @param {number} nums
 * @return {*}
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
  // 递归，数组为空，返回null
  if (nums.length === 0) {
    return null;
  }
  // 找到序列中点
  const mid = Math.floor(nums.length / 2);
  // 生成根节点
  const head = new TreeNode(nums[mid]);
  const left = mid - 1,
    right = mid + 1;
  // 因为是有序列表，则头部左侧为树的左子树，右侧为右子树
  if (left >= 0) {
    // 左侧有节点，递归左侧节点，形成左子树
    head.left = sortedArrayToBST(nums.slice(0, mid));
  }
  if (right < nums.length) {
    // 右侧有节点，递归右侧节点，生成右子树s
    head.right = sortedArrayToBST(nums.slice(right));
  }
  return head;
}
// @lc code=end
