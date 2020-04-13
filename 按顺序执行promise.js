function getA(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      // resolve(2)
      console.log('A');
      
    },1000)
  })
}
function getB(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      // resolve(2)
      console.log('B');
      
    },2000)
  })
}
new Promise((resolve)=>{
  console.log('start');
  resolve()
  
}).then(getA()).then(getB())