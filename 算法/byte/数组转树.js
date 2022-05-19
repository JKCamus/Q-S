// let arr = [
//   { id: 1, name: "部门1", pid: 0 },
//   { id: 2, name: "部门2", pid: 1 },
//   { id: 3, name: "部门3", pid: 1 },
//   { id: 4, name: "部门4", pid: 3 },
//   { id: 5, name: "部门5", pid: 4 },
//   { id: 6, name: "部门6", pid: 0 },
// ];

// // 递归方案
// const arrayChangeToTree1 = (data, pid = 0) => {
//   const getChildren1 = (data, result, pid) => {
//     for (const item of data) {
//       if (item.pid === pid) {
//         const newItem = { ...item, children: [] };
//         result.push(newItem);
//         getChildren1(data, newItem.children, item.id);
//       }
//     }
//   };
//   let result = [];
//   getChildren1(data, result, pid);
//   return result;
// };

// // console.log("res=>", JSON.stringify(arrayChangeToTree1(arr)));

// //方案2：有两次循环，该实现的时间复杂度为O(2n)，需要一个Map把数据存储起来，空间复杂度O(n)
// // 主要思路是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储
// const arrayToTree2 = (data, initPid = 0) => {
//   const result = [];

//   const dataMap = {};
//   // 初始化数据map
//   for (const item of data) {
//     dataMap[item.id] = { ...item, children: [] };
//   }

//   for (const item of data) {
//     const id = item.id;
//     const pid = item.pid;
//     const treeItem = dataMap[id];

//     if (pid === initPid) {
//       result.push(treeItem);
//     } else {
//       if (!dataMap[pid]) {
//         item[pid] = { children: [] };
//       }
//       dataMap[pid].children.push(treeItem);
//     }
//   }
//   return result;
// };

// console.log("res2=>", JSON.stringify(arrayToTree2(arr)));

// const res = [
//   {
//     id: 1,
//     name: "部门1",
//     pid: 0,
//     children: [
//       { id: 2, name: "部门2", pid: 1, children: [] },
//       {
//         id: 3,
//         name: "部门3",
//         pid: 1,
//         children: [
//           {
//             id: 4,
//             name: "部门4",
//             pid: 3,
//             children: [{ id: 5, name: "部门5", pid: 4, children: [] }],
//           },
//         ],
//       },
//     ],
//   },
//   { id: 6, name: "部门6", pid: 0, children: [] },
// ];

// function test(params) {
//   let key;
//   [...a.keys()].forEach((keys) => {
//     if (keys.includes(5)) {
//       key = keys;
//     }
//   });
//   console.log("res=>1", a.get(key));
// }

// test();
// const pop = [
//   "card_av_invitation",
//   "card_meeting_invitation",
//   "card_meeting_update",
//   "card_meeting_notice",
//   "card_meeting_sign",
//   "card_meeting_cancel",
//   "card_todo_notice",
// ].map((item) => `${item.toLocaleUpperCase()}="${item}"`);
// console.log("res=>", pop);

// msgBody={
//   userName:'op',
//   meetingName:'000'
// }

// const PushTemplate = {
//   push_staff_join_apply: {
//     keys: ["userName"],
//     content: "${userName} 申请加入团队",
//     title: "新成员加入团队申请",
//   },
//   push_staff_join_pass: {
//     keys: ["companyName"],
//     title: "加入申请已被通过，切换到团队中开始体验吧",
//     content: "点击进行切换",
//   },
// };
// const popMap = {};
// const currentTemplate = PushTemplate[msg?.type];
// currentTemplate.keys.forEach((key) => {
//   popMap[key] = msg.msgBody[key];
// });

// const format = (template = "", tempMap) => {
//   function changeTemp(match, childItem) {
//     return tempMap[childItem];
//   }
//   return template.replace(/\$\{([^}]+)\}/g, changeTemp);
// };

// const content = format(currentTemplate.content, popMap);
// const title = format(currentTemplate.title, popMap);
// console.log("res=>", content);
// console.log("title=>", title);

console.log("res=>", "12345678".slice(0, 3));
