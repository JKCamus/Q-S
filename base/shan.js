class SuperTask {
  constructor(limit = 2) {
    this.limit = limit;
    this.task = [];
    this.counter = 0;
  }
  add(promiseCreator) {
    return new Promise((resolve) => {
      const task = {
        promiseCreator,
        resolve,
      };
      if (this.counter < this.limit) {
        this.run(task);
      } else {
        this.task.push(task);
      }
    });
  }
  run(task) {
    this.counter++;
    task.promiseCreator().then((res) => {
      task.resolve();
      this.counter--;
      if (this.task.length > 0) {
        this.run(this.task.shift());
      }
    });
  }
}

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
const superTask = new SuperTask();
function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`);
    });
}
addTask(10000, 1); // 10000ms后输出 任务1完成
addTask(5000, 2); // 5000ms后输出 任务2完成
addTask(3000, 3); // 8000ms后输出 任务3完成
addTask(4000, 4); // 11000ms后输出 任务4完成
addTask(5000, 5); // 15000ms后输出
