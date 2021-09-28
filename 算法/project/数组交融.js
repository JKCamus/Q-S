const arr1=[
]

const arr2=[
  {
    key:'123',
    name:'ca'
  },{
    key:'1234',
    name:'wo'
  }
]
const res=arr2.map(item=>{
const target=arr1.find(x=>x.userId===item.key)
console.log('res=>', target)
if (target) {
  return  {
    ...item,
  ...content
  }
}else{
  return{
    ...item
  }
}

})
console.log('res=>', res)
