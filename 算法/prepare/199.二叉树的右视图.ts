/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
  // if(root===null)return []
  // const result:number[]=[]
  // const dfs=(node:TreeNode|null,step:number,res:number[])=>{
  //   if(node===null)return
  //   if(step===res.length){
  //     result.push (node.val)
  //   }
  //   dfs(node.right,step+1,res)
  //   dfs(node.left,step+1,res)
  // }
  // dfs(root,0,result)
  // return result
  if (root === null) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    let right;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      right = node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(right);
  }
  return result;
}
// @lc code=end
