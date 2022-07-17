/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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
 * 1. 需要初始化dummy节点，预备fast和slow指针，初始都指向head
 * 2. 计算链表长度counter
 * 3. 边界，如果空链表，返回dummy.next
 * 4. 用移动位数k求余链表长度，（长5移动6，实际位移1）==》MOD
 * 5.通过先移动快指针步数为计算的余数。MOD--
 * 6. 同时移动快慢指针，直到，快指针到尾部，fast.next===null
 * 7. 开始收尾，调整指针指向。快指针指向头部fast.next=dummy.next
 * 8. 头部变更，dummy.next=slow.next
 * 9. 慢指针处理为尾部节点，则，slow.next=null
 * 10. 返回头部dummy.next节点
 * @param {ListNode} head
 * @param {number} k
 * @return {*}
 */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(null);
  dummy.next = head;
  let fast = head,
    slow = head,
    counter = 0;
  let last = head;

  while (last !== null) {
    counter += 1;
    last = last.next;
  }
  if (counter === 0) return dummy.next;
  let MOD = k % counter;
  while (MOD--) {
    fast = fast.next;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;
  return dummy.next;
}
// @lc code=end
