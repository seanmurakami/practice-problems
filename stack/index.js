class Stack {
  constructor() {
    this._stack = []
  }
  push(item) {
    this._stack.push(item)
  }
  peek() {
    return this._stack[this._stack.length -1]
  }
  pop() {
    return this._stack.pop()
  }
  search(item) {
    return this._stack.indexOf(item)
  }
  get length() {
    return this._stack.length
  }
}

module.exports = Stack
