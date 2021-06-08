/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-08 10:01:48
 * @LastEditors: camus
 * @LastEditTime: 2021-06-08 10:08:24
 */
// 替换对象键名
const replaceKeys = (obj, keysMap) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceKeys(item, keysMap));
  } else {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = keysMap[key] || key;
      acc[newKey] = obj[key];
      return acc;
    }, {});
  }
};
const userList = [
  { name: "sam", age: 30, gender: "male" },
  { name: "yy", age: 18, gender: "female" },
];
const a = replaceKeys(userList, { gender: "sex" });
console.log("res=>", a);

// res=> [
//   { name: 'sam', age: 30, sex: 'male' },
//   { name: 'yy', age: 18, sex: 'female' }
// ]
