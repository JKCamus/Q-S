// Object.__proto__.name = value
let user = new Object()
user.name='lily'
user.age=24
console.log(user);//{name: "lily", age: 24}
delete user.age
console.log(user);//{name: "lily"}

