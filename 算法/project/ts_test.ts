/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-08-20 10:46:34
 * @LastEditors: camus
 * @LastEditTime: 2021-09-15 15:49:59
 */
const data = [
  {
    id: "1",
    name: "kj",
  },
  {
    id: "2",
    name: "skdjfkds",
  },
  {
    id: "1",
    name: "o",
  },
];
data[0] = { id: "1", name: "2" };
console.log("data");
const distinctData = (data: { id: string }[]) => {
  let temp: string[] = [];
  const collection: { id: string }[] = [];
  const tempData = data.reduce((curr, next) => {
    if (!temp.includes(next.id)) {
      temp.push(next.id);
      curr.push(next);
    }
    return curr;
  }, collection);
  return tempData;
};

console.log("filterData", distinctData(data));
