/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  let pre = null,
    curr = head,
    next = head;
    // 经典的链表题型，也体现了单向链表的局限性，链表，多数是在未玩弄指针
    // 四部曲，
    // next的作用是 用来找到下一个节点，curr指针和pre指针用来实现交换
  while (curr !== null) {
    next = curr.next;
    // 指向pre,
    curr.next = pre;
    // curr不能先动,需要pre占住当前curr的位置
    pre = curr;
    curr = next;
  }
  return pre;
};
// @lc code=end
