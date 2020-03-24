// // *sort排序
// let arr = [1, -1, '-6', -120, 4, -4, 5, '6']
// res = arr.sort()
// console.log(res);//[-1, -120, -4, "-6", 1, 4, 5, "6"]
// 修正
// let arr = [1, -1, '-6', -120, 4, -4, 5, '6']
// const compare = (a, b) => a - b
// res = arr.sort(compare)
// console.log(res); //[-120, "-6", -4, -1, 1, 4, 5, "6"]
// let arr1 = [{
//   age: 10,
// }, {
//   age: 1
// }, {
//   age: 12
// }];
// const compare1 = (a, b) => a.age - b.age
// res1 = arr1.sort(compare1)
// console.log(res1);
// //(3) [{…}, {…}, {…}]==>0: {age: 1} 1: {age: 10}2: {age: 12}


// //*filter筛选
// let res=[3,-2,-5,1,43,11,1].filter(item=>item>0)
// console.log(res);//[3, 1, 43, 11, 1]

// //*将数组映射为另外一个数组
// res1=[1,2,4,-3,2].map(item=>item*2)
// console.log(res1);//[2, 4, 8, -6, 4]

// //*array.reduce – 将数组合成一个值。
// res2=[1,2,3,6,-2,1].reduce((pre,item)=>pre+item)//0为初始值
// console.log(res2);//11


