// 封装优先级队列
function PriorityQueue() {
  var items = [];

  // 封装一个新的构造函数, 用于保存元素和元素的优先级
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  // 添加元素的方法
  this.enqueue = function (element, priority) {
    // 1.根据传入的元素, 创建新的QueueElement
    var queueElement = new QueueElement(element, priority);

    // 2.获取传入元素应该在正确的位置
    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        // 注意: 我们这里是数字越小, 优先级越高
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      // 遍历完所有的元素, 优先级都大于新插入的元素时, 就插入到最后
      if (!added) {
        items.push(queueElement);
      }
    }
  };

  // 删除元素的方法
  this.dequeue = function () {
    return items.shift();
  };

  // 获取前端的元素
  this.front = function () {
    return items[0];
  };

  // 查看元素是否为空
  this.isEmpty = function () {
    return items.length == 0;
  };

  // 获取元素的个数
  this.size = function () {
    return items.length;
  };
}
