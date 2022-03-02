let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];

// 递归方案
const getChildren1 = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren1(data, newItem.children, item.id);
    }
  }
};

const arrayChangeToTree1 = (data, pid = 0) => {
  let result = [];
  getChildren1(data, result, pid);
  return result;
};

console.log("res=>", JSON.stringify(arrayChangeToTree1(arr)));

const res = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      { id: 2, name: "部门2", pid: 1, children: [] },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [{ id: 5, name: "部门5", pid: 4, children: [] }],
          },
        ],
      },
    ],
  },
  { id: 6, name: "部门6", pid: 0, children: [] },
];
