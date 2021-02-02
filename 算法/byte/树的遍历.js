/*
 * @Description:
 * @version:分别按照二叉树先序，中序和后序打印所有的节点。
 *result= [[1,2,3],[2,1,3],[2,3,1]]
 * @Author: camus
 * @Date: 2021-02-02 09:27:52
 * @LastEditors: camus
 * @LastEditTime: 2021-02-02 09:41:27
 */
function threeOrders(root) {
  // write code here
  const pre = [],
    middle = [],
    post = [];
  const preOder = function (root) {
    if (root === null) {
      return;
    }
    pre.push(root.val);
    preOder(root.left);
    preOder(root.right);
  };
  const middleOder = function (root) {
    if (root === null) {
      return;
    }
    middleOder(root.left);
    middle.push(root.val);
    middleOder(root.right);
  };
  const postOder = function (root) {
    if (root === null) {
      return;
    }
    postOder(root.left);
    postOder(root.right);
    post.push(root.val);
  };
  preOder(root);
  middleOder(root);
  postOder(root);

  return [pre, middle, post];
}
