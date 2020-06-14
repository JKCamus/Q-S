var item = []

function Stack() {
  this.push = (element) => {
    item.push(element)
  }
  this.pop = () => item.pop()

  this.peek = () => item[item.length - 1]
  this.isEmpty = () => item.length === 0
  this.size = () => item.length
}

let stack = new Stack()

stack.push(6)
stack.push(5)
stack.pop()
console.log(item);