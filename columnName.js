let arr = JSON.parse('[{"tableName":"dashboard_portal","fields":["description","project_id"]},{"tableName":"dashboard","fields":["dashboard_portal_id","index"]},{"tableName":"davinci_statistic_duration","fields":["email","org_id","project_id","user_id"]}]')

// let reg = [].map(res=>res.fields).flatmap(x=>x)
// 求交集
// 合并全部数组
// 数组比对交集，比对上的加上前缀
// 合并比对后的数组

let compare = []
let compared = []
for (let item of arr) {
  for (let field of item.fields) {
    compare.push({
      [item.tableName]: field
    })
    compared.push(field)
  }
}
let sameTag = [];
for (var j = 0; j < compared.length; j++) {
  for (var i = j + 1; i < compared.length; i++) {
    if (compared[j] == compared[i]) {
      sameTag.push(compared[i]);
    }
  }
}
let sameTableTag = compare.filter(item => {
  return sameTag.includes(...Object.values(item))
})
let Difference = compare.filter(item => !sameTableTag.includes(item))
let resSame = sameTableTag.map(item => {
  return Object.keys(item) + "." + Object.values(item)
})
let resDifference = Difference.map(item => Object.values(item).toString())
let result = [...resSame, ...resDifference]

console.log("ok",result);
// console.log("compared",compared);
// console.log("compare",compare);
// console.log("sameTableTag",sameTableTag);
// console.log("resSame",resSame);
// console.log("sameTag",sameTag);