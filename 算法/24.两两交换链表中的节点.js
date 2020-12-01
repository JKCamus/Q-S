/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let current = dummy;
  while (current.next !== null && current.next.next !== null) {
    let n1 = current.next;
    let n2 = current.next.next;
    current.next = n2;
    // 下面两行不能换顺序，必须先n1.next指向n2.next 否则节点指向不对
    n1.next = n2.next;
    n2.next = n1;
    current = n1;
  }
  return dummy.next;
};
// @lc code=end
