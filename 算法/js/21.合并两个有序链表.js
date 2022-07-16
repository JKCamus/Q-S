/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();
  let dummy = curr;
  while (l1 !== null && l2 !== null) {
    // 与数组类似，比大小，小的先进，并且移动指针
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    // curr节点也必须后移，否则，会被覆盖的哦

    curr = curr.next;
  }
  // 若有链表循环完后还不为空，则直接贴到后面
  if (l1 !== null) {
    curr.next = l1;
  }
  if (l2 !== null) {
    curr.next = l2;
  }
  return dummy.next;
};
// @lc code=end
