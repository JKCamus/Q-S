function multiRequest(urls = [], limit, iteratorFn) {
  const len = urls.length;
  const result = Array(len).fill(false);
  let count = 0;
  return new Promise((resolve, reject) => {
    const start = () => {
      let curr = count++;
      if (curr >= len) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        !result.includes(false) && resolve(result);
        return;
      }
      const url = urls[curr];
      console.log("res=>", result);
      iteratorFn(url)
        .then((res) => {
          result[curr] = res;
          if (curr < len) start();
        })
        .catch((err) => {
          result[curr] = err;
          if (curr < len) start();
        });
    };
    // 请求maxNum个
    while (count < limit) {
      start();
    }
  });
}
// const timeout = (i) =>
//   new Promise((resolve) => setTimeout(() => {
//     console.log('result', i)
//     resolve(i)}, i));

//     multiRequest( [1000, 5000, 3000, 2000,100,4000],2,timeout).then(res=>{
//       console.log('r', res)
//     })
//  asyncPool(2, [1000, 5000, 3000, 2000], timeout);

class SuperTask {
  constructor(limit = 2) {
    this.tasks = []; // 待运行的任务
    this.counter = 0;
    this.limit = limit;
    this.id = 0;
  }
  // promiseCreator 是一个异步函数，return Promise
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      this.id += 1;
      const task = {
        promiseCreator,
        resolve,
        id: this.id,
      };
      if (this.counter < this.limit) {
        this.run(task);
      } else {
        this.tasks.push(task);
      }
    });
  }
  run(task) {
    this.counter++;
    console.log("res=>", this.counter);
    task.promiseCreator().then(() => {
      task.resolve();
      this.counter--;
      if (this.tasks.length > 0) {
        this.run(this.tasks.shift());
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
// addTask(400, 4)
// addTask(200, 2)
// addTask(300, 3)
// addTask(100, 1)
// 2431
