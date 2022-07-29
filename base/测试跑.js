// let a = Promise.reject("a")
//   .then(() => {
//     console.log("a passed");
//   })
//   .catch(() => {
//     console.log("a failed");
//   });
// Promise.reject("b")
//   .catch(() => {
//     console.log("b failed");
//   })
//   .then(() => {
//     console.log("b passed");
//   });

Function.prototype.a = "function";
Object.ptototype.a = "object";
function Person() {}
let child = new Person();
