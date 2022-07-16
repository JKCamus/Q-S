/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-10 14:21:40
 * @LastEditors: camus
 * @LastEditTime: 2020-12-10 15:44:12
 */
let arr = [
  { id: 1, child: { id: 111, content: 'aaa' } },
  { id: 2, child: { id: 222, content: 'bbb' } },
  { id: 3, child: { id: 333, content: 'ccc' } }
]
//模拟对象
let obj = { id: 3, child: { id: 333, content: 'ddd' } }
const _arr=[...arr]

// _arr.forEach((item,index)=>{
//   if(item.id===obj.id){
//     _arr[index]=obj
//   }
// })
let set=new Set()
for(let item of arr){
  set.add(JSON.stringify(item))
}
// JSON.stringify(arr)
set.add(JSON.stringify(obj))
console.log('', set)

// let res=arr.some((item,index,array)=>{
//   if(item.id===obj.id){
//     array[index]=obj
//     console.log('arra', array)
//   }
//   return array
// })

// console.log('ss',arr )
// console.log('newarr',_arr )
