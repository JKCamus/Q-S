/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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
// 遍历到最左侧的叶子节点
// 访问当前节点，更新k的值
// 转向右子树

function kthSmallest(root: TreeNode | null, k: number): number {
const stack:TreeNode[]=[]
let node:TreeNode|null=root
 while(node||stack.length>0){
  while(node){
    stack.push(node)
    node=node.left
  }
  node=stack.pop()
  k-=1
  if(k===0)return node.val
  node=node.right
 }
 return -1
}
// @lc code=end
