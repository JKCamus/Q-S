/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * @description:
 * 思路：
 * 1.与反转链表1类似。
 * 2.不同点在于边界考虑
 * 3.需要新建立两枚指针，占住翻转起始位置
 * 步骤如下注释
 * !注意点
 * 1. 在翻转的起始位置新建pre对应pre2指针，curr对应curr2指针
 * 2. left起始位置可以是1，所以，需要考虑head变动
 * 3. left为自然数
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  // 起手式，反转链表所需三枚指针
  let pre = null, curr = head, n = head
  // 快速到达反转起点
  for (let i = 1; i < left; i++) {
    // pre到达curr位置，注意顺序
    pre = curr
    // curr走一步
    curr = curr.next
  }

  // 占住反转起始位置，考到可以后面写
  let pre2 = pre, curr2 = curr

  // 起手为left，注意等号，经典反转4部
  for (let i = left; i <= right; i++) {
    n = curr.next
    curr.next = pre
    pre = curr
    curr = n
  }

  //if left>1同意思。当left=1，head是会变化的
  if (pre2 !== null) {
    pre2.next = pre
  } else {
    head = pre
  }

  curr2.next = curr
  return head
};
// @lc code=end

