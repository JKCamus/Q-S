// let data={value1:'AND',value2:'OR'}
let data = {
  list: ['AND', 'OR']
}

// console.log(data.value1);
// console.log(data.list);

data.list.map((item,index)=> {
  return console.log(item,index);
})


  // data.list.map((item, index) => (
  //     // <Option key={index} value={item}>{item}</Option>
  //     console.log(item);
      
  // ))
