/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  const r = [];
  if (!head) return null;
  while (head) {
    r.push(head);
    var tmp = head.next;
    head.next = null;
    head = tmp;
  }
  r.sort((a, b) => a.val - b.val).reduce((p, v) => (p.next = v));
  return r[0];
};
// @lc code=end
