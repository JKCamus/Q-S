// 20. 有效的括号
/* 
不能忘了扫描过的左括号，它们等着被匹配，需要一个容器暂存。
那么，这个容器为什么是栈？
我们继续往右扫，当遇到右括号，我们期待它匹配掉「最近出现的左括号」。
容器中的「最近出现的左括号」被匹配了，就不用等待匹配了，可以离开容器。
它是「后进」的，现在「先出」了，「后进先出」，所以是栈。
有点像对对碰消消乐，匹配了就拿掉，直到容器中所有左括号都匹配光，则有效。如果还剩下左括号未匹配，则不有效。

 */
// let data = "()[]{}";
// var isValid = function (data) {
//   let map = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };
//   let stack = [];
//   for (const cur of data) {
//     if (map[cur]) {
//       /* 左括号推进去 */
//       stack.push(cur);
//     } else {
//       /* 如果都没有对应的值返回 */
//       if (stack.length === 0) {
//         return false;
//       }
//       const stackTop = stack[stack.length - 1];
//       //   栈顶为=>"("=>"["=>"{"
//       // 然后进行匹配，有就出栈
//       if (map[stackTop] === cur) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   /* 最后判断是否还有漏网之鱼 */
//   return stack.length === 0;
// };

// console.log("ssssssss", isValid(data));

/* 最小栈（包含getMin函数的栈） */

let MinStack = function () {
  this.items = [];
  this.min = null;
  MinStack.prototype.push = function (data) {
    if (!this.items.length) this.min = data;
    this.min = Math.min(data, this.min);
    this.items.push(data);
  };

  MinStack.prototype.pop = function () {
    let num = this.items.pop();
    this.min = Math.min(...this.items);
    return num;
  };
  MinStack.prototype.top = function () {
    if (!this.items.length) return null;
    return this.items[this.items.length - 1];
  };
  MinStack.prototype.getMin = function () {
    return this.min;
  };
};

let Stack = new MinStack();
Stack.push(3);
Stack.push(2);
Stack.push(10);
Stack.push(19);
Stack.push(11);
Stack.pop();
Stack.top();
console.log("ss", Stack);
console.log("ass", Stack.getMin());
console.log("ass", Stack.top());
