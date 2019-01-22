class Queue {
  constructor() {
    this._head = null
    this._tail = null
  }

  enqueue(item) {
    const node = {
      value: item,
      next: null
    }

    if(this._head === null) {
      this._head = node
      this._tail = node
      return node.value
    }
    if(this._head === this._tail) {
      this._head.next = node
      this._tail = node
      return node.value
    }

    this._tail.next = node
    this._tail = node
    return node.value
  }
  dequeue() {
    if(!this._head) {
      return null
    }
    if(this._head === this._tail) {
      this._head = null
      this._tail = null
      return this._head.value
    }
    this._head = this._head.next
    return this._head.value
  }
}

module.exports = Queue
