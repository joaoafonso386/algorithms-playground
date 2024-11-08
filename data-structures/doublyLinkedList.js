class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
        this.prev = null
     } 
}

class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
      const node = new Node(val)
      if(this.length === 0) {
        this.head = node
        this.tail = node
      } else {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      }
      this.length++
      return this
    }

    pop() {
      let last = this.tail
      if(this.length === 0) return undefined
      if(this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.tail = last.prev
        this.tail.next = null
        last.prev = null
      }
      this.length--
      return last
    }

    shift() {
      const first = this.head
      if(this.length === 0) return undefined
      if(this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = first.next
        this.head.prev = null
        first.next = null
      }
      this.length--
      return first
    }

    unshift(val) {
      const node = new Node(val)
      if(this.length === 0) {
        this.head = node
        this.tail = node
      } else {
        this.head.prev = node
        node.next = this.head
        this.head = node
      }
      this.length++
      return this
    }

    get(index) {
      if(index < 0 || index >= this.length) return null
      const middle = Math.round(this.length) / 2
      let curr
      if(index > middle) {
        curr = this.tail
        for(let i = this.length - 1; i >= 0; i--) {
          if(i === index) return curr
          curr = curr.prev
        }
      } else {
        curr = this.head
        for(let i = 0; i < this.length; i++) {
          if(i === index) return curr
          curr = curr.next
        }
      }
    }

    set(index, val) {
      const node = this.get(index)
      if(!node) return false
      node.val = val
      return true
    }

    insert(index, val) {
      if(index === 0) this.unshift(val)
      if(index === this.length - 1) this.push(val)
      const node = new Node(val)
      const prevNode = this.get(index - 1)
      if(!prevNode) return false
      prevNode.next.prev = node
      node.next = prevNode.next
      prevNode.next = node
      node.prev = prevNode
      this.length++
      return true
    }

    remove(index) {
      if(index < 0 || index >= this.length) return undefined
      if(index === 0) this.shift(index)
      if(index === this.length - 1) this.pop(index)
      const node = this.get(index)
      const nextNode = node.next
      const prevNode = node.prev
      nextNode.prev = prevNode
      prevNode.next = nextNode 
      node.next = null
      node.prev = null
      this.length--
      return node
    }

}

const list = new DoublyLinkedList()
list.push(12)
list.push(5)
list.push(8)
list.push(10)
list.remove(1)
console.log(list.head.next)
