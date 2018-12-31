class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
  }

  insertHead(item) {
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
      this._head = node
      this._head.next = this._tail
      return node.value
    }

    node.next = this._head
    this._head = node
    return node.value
  }
  insertTail(item) {
    const node = {
      value: item,
      next: null
    }

    if(!this._head) {
      this._head = node
      this._tail = node
      return node.value
    }
    if(this._head === this._tail) {
      this._head.next = node
      this._tail = node
      return node.value
    }
    this._tail = node
    return node.value
  }
  deleteHead() {
    if(!this._head) {
      return null
    }
    if(this._head === this._tail) {
      this._head = null
      this._tail = null
      return null
    }
    this._head = this._head.next
    return this._head.value
  }
  deleteTail() {
    let currentNode = this._head
    const previousTail = this._tail
    while (currentNode.next !== this._tail) {
      currentNode = currentNode.next
    }
    this._tail = currentNode
    currentNode.next = null
    return previousTail.value
  }
}

module.exports = LinkedList
