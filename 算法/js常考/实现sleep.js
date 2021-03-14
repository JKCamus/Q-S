const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

// Promise 解
sleep(1000).then(() => console.log("res=>一秒"));

// async await
async function output(time) {
  const start = +new Date();
  await sleep(time);
  const end = +new Date();
  console.log("res=>", end - start);
  return;
}
output(1000);

//Generator
function* sleepGenerator(time) {
  yield new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}
sleepGenerator(1000)
  .next()
  .value.then(() => {
    console.log(1);
  });
