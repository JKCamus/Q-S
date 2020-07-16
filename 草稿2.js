/* let main={tab1:["name","id","male","bbc"]}

let name1="tab2"
let name2="tab1"
let sub={tab2:["name","id","female","cnc"]}
let compareTab=[...new Set([...main.tab1,...sub.tab2])]
let newTab=main.tab1.filter(item=>sub.tab2.includes(item))


let res=[]
newTab.map(item =>{
  res.push(name1+"-"+item,name2+"-"+item)
  // console.log(item);
})
// for()
  console.log(res); */


//   let { keys, values, entries } = Object;
// const obj={a:[12,2],b:[1,3,4]}

// //for (let item in obj){
// //  console.log(Object.values(obj))}
//  //console.log(Object.values(obj))
// for (let value of values(obj)) {
// // [1, 2, 3]
//    console.log(value)
// }

// for (let {key, value} of entries(obj)) {
//   // [['a', 1], ['b', 2], ['c', 3]]
//   console.log({[key] value});

//   }
// let joinCondition={mainTable: "cron_job", mainColumn:"id"}
// // joinCondition: {mainTable: "cron_job", mainColumn:"id"}
// var jsonData = JSON.stringify(joinCondition)
// console.log(jsonData);
// console.log(joinCondition);
// let join = (connection) => {
//   switch (connection) {
//     case "左关联":
//       return "left"
//     case "右关联":
//       return "right"
//     case "内连接":
//       return "inner"
//   }
// }

// console.log(join("右关联"));
// let aj = {
//   name: "测试可视化配置明",
//   description: "可视化配置描述",
// projectId: 12,
//   sourceId: 19,
// }
// console.log(JSON.stringify(aj));
// const eum ViewModelTypes= {
//   Category = 'category',
//   Value = 'value'
// }
// const ViewModelTypesLocale = {
//   'category': '维度',
//   'value': '指标'
// }
// const dataColumn = {
//   description: {
//     modelType: "category",
//     sqlType: "VARCHAR",
//     visualType: "string"
//   }
// }
// const columnDataSource = Object.entries(dataColumn)
//   .map(
//     ([name, value]) => {
//       // console.log([name, value])
//       console.log(name)
//       console.log({
//         ...value
//       });

//       return ({
//         name,
//         alias: name,
//         ...value
//       })
//     }
//   )
// console.log(columnDataSource);
const model = {
  config: {
    sqlType: "TEXT",
    visualType: "string",
    modelType: "category"
  },
  create_by: {
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value"
  },
  create_time: {
    sqlType: "DATETIME",
    visualType: "date",
    modelType: "category"
  },
  dashboard_portal_id: {
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value"
  },
  full_parent_Id: {
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category"
  },
  id: {
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value"
  },
  index: {
    sqlType: "INT",
    visualType: "number",
    modelType: "value"
  },
  name: {
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category"
  },
  parent_id: {
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value"
  },
  type: {
    sqlType: "SMALLINT",
    visualType: "number",
    modelType: "value"
  },
  update_by: {
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value"
  },
  update_time: {
    sqlType: "DATETIME",
    visualType: "date",
    modelType: "category"
  }
}

const variable = [{
    key: "gcFjx",
    alias: "",
    type: "auth",
    name: "dashboard_portal_id",
    valueType: "string"
  },
  {
    key: "jBkCo",
    alias: "",
    type: "auth",
    name: "dashboard_portal_id",
    valueType: "string"
  },
  {
    key: "tHT7o",
    alias: "",
    type: "auth",
    name: "type",
    valueType: "string"
  },
  {
    key: "loLI0",
    alias: "",
    type: "auth",
    name: "update_by",
    valueType: "string"
  }
]

// let arr=variable.map(item=>item.name)

// let res = Object.entries(model).filter((item)=>!variable.map(item=>item.name).includes(item[0]))
// .map(([valueType, text]) => {
// console.log("1",valueType);
// console.log("2",text);
// })

let res = Object.entries(model).filter(([name,value])=>name!=="update_by")

// console.log(res);
// let res={}
// for(let [item,value] in model){
//   console.log(item);
//   if(item!=="update_time"){

//     return res={
//   [item]:value
//     }
//   }
// }
// console.log(res);
// let k={}
//  for(let [name,value] of res){
//   // console.log(name);
//   // console.log(value);
//    k={
//   ...k,
//   [name]:value
//   }
// }
// console.log("k",k);

// const more="name"
//   const params = (more) => {
//     var json = new Function('return ' + more)()
//     return json
//   }
//   console.log(typeOf (more))//true,变量已生成，但未赋值。


// let arr=variable.map(item=>item.name)
// let res={}
// for (let [name, value] of Object.entries(model)) {
//   res= {...res,[name]:name}
// }
//   console.log("res",res);
// 需要加上双引号。

let arr = JSON.parse('[{"tableName":"dashboard_portal","fields":["description","project_id"]},{"tableName":"dashboard","fields":["dashboard_portal_id","index"]},{"tableName":"davinci_statistic_duration","fields":["email","org_id","project_id","user_id"]}]')

// let reg = [].map(res=>res.fields).flatmap(x=>x)
// 求交集
// 合并全部数组
// 数组比对交集，比对上的加上前缀
// 合并比对后的数组



let ob = []
let cop = []
for (let item of arr) {
  for (let field of item.fields) {
    // console.log("tableName", item.tableName);
    ob.push({
      [item.tableName]: field
    })
    cop.push(field)
  }
}

var newarr = [];
for (var j = 0; j < cop.length; j++) {
  for (var i = j + 1; i < cop.length; i++) {
    if (cop[j] == cop[i]) {
      newarr.push(cop[i]);

    }
  }
}
console.log("newarr",newarr);
console.log("arr",arr);
let aj = ob.filter(item => {
  // console.log("value", ...Object.values(item));
  return newarr.includes(...Object.values(item))
})
// console.log("newaajrr",aj);

let Difference = ob.filter(item => !aj.includes(item))
let result = aj.map(item => {
  return Object.keys(item) +"."+ Object.values(item)
})
let same = Difference.map(item => Object.values(item).toString())
let ok = [...result, ...same]
console.log("ok?",result);
console.log("same?", same);
// console.log("ok?",ok);

// console.log("aj", aj);
console.log("ok", ok);
console.log("ob", ob);
console.log("cop", cop);
console.log("newarr", newarr);
console.log("Difference", Difference);


// private tagOption = Object.entries(this.model)
// .filter(
//   (item) => !this.variable.map((item) => item.name).includes(item[0])
// )
// .map(([variableType, text]) => {
//   console.log('vari', this.variable)
//   console.log('variableType', variableType)
//   // debugger
//   return (
//     <Option key={variableType} value={variableType}>
//       {variableType}
//     </Option>
//   )
// })

