/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建虚拟dummy节点
  let dummy = new ListNode();
  dummy.next = head;
  // 快慢指针都停在dummy节点
  let s = dummy,
    f = dummy,
    preNode = null,
    count = 0;
  while (f) {
    f = f.next;
    // 当count=n的时候，快慢指针同时走
    if (f && count >= n) {
      s = s.next;
      preNode = s;
    }
    count += 1;
  }
  if (!preNode) {
    head = head.next;
  } else {
    preNode.next = preNode.next.next;
  }
  return head;
};
// @lc code=end
