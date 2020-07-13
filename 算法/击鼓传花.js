/* 
队列(Queue)，它是一种运算受限的线性表,先进先出(FIFO First In First Out)
队列是一种受限的线性结构
受限之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作
 */
let Queue = function () {
  let items = [];
  this.enqueue = function (element) {
    items.push(element);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
  this.print = function () {
    console.log(items.toString());
  };
};
// var queue = new Queue();
// queue.enqueue("abc");
// queue.enqueue("cba");
// queue.enqueue("nba");
// queue.print();
// console.log(queue);
function PassGame(list, num) {
  let queue = new Queue();

  for (let i = 0; i < list.length; i++) {
    queue.enqueue(list[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  console.log(queue.size());
  let endOne = queue.dequeue();
  console.log("alive", endOne);
  // console.log(queue);
  return list.indexOf(endOne);
}
let names = ["one", "two", "three", "four", "five"];

let index = PassGame(names, 10);
console.log("aliveIndex", index);
