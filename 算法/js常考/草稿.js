function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (map.has(val)) {
      return [map.get(val), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
// 两数相加1     打卡1
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let sum = 0;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr = curr.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
// 两数相加2 打卡1

var addTwoNumbers2 = function (l1, l2) {
  const stack1 = [],
    stack2 = [];
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let curr = null,
    carry = 0;

  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum = 0;
    // 是if 不是while
    if (stack1.length !== 0) {
      sum += stack1.pop();
    }

    if (stack2.length !== 0) {
      sum += stack2.pop();
    }
    sum += carry;
    const node = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    node.next = curr;
    curr = node;
  }

  if (carry !== 0) {
    const node = new ListNode(carry);
    node.next = curr;
    curr = node;
  }
  return curr;
};

// 509
var fib = function (n) {
  if (n <= 0) {
    return n;
  }
  const cache = [];
  cache[0] = 0;
  cache[1] = 1;
  function memoize(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = memoize(n - 1) + memoize(n - 2);
    return cache[n];
  }
  memoize(n);
  return cache[n];
};

// 链表反转
var reverseList = function (head) {
  let pre = null,
    curr = head,
    next = head;
  while (curr !== null) {
    next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  return curr;
};

// 链表是否有环
var hasCycle = function (head) {
  if (head === null) return false;
  let fast = head,
    slow = head;
  while (fast.next !== null || fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
// 爬楼梯
var climbStairs = function (n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  function memoize(n) {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    memo[n] = memoize(n - 1) + memoize(n - 2);
    // 需要返回
    return memo[n];
  }
  memoize(n);
  return memo[n];
};
// 解法二
var climbStairs = function (n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  // 从3开始，小于等于注意点
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[i];
};
// 子数组的最大累加和
function maxsumofSubarray(arr) {
  if (!arr.length) {
    return 0;
  }
  let result = arr[0],
    temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    temp = temp < 0 ? arr[i] : temp + arr[i];
    result = Math.max(temp, result);
  }
  return result;
}
console.log('res=>', maxsumofSubarray( [-2,1,-3,4,-1,2,1,-5,4]))
//
