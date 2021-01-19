/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = [],
    stack2 = [];
  // 将两链表分别推入两个栈
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0,
    curr = null;
  // 只要其中一个栈还有值就继续
  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum = 0;
    if (stack1.length !== 0) {
      sum += stack1.pop();
      // 等于 const num=stack1.pop()
      // sum=sum+num
    }
    if (stack2.length !== 0) {
      sum += stack2.pop();
    }

    // 加上进位
    sum += carry;
    // 得到个位数
    const node = new ListNode(sum % 10);
    // 处理进位
    carry = Math.floor(sum / 10);
    // 注意顺序
    node.next = curr;
    curr = node;
  }
  // 最后处理进位
  if (carry !== 0) {
    const node = new ListNode(carry);
    node.next = curr;
    curr = node;
  }
  return curr;
};

// @lc code=end
