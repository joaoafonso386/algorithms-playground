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
      if(index > middle) {
        for(let i = this.length - 1; i >= 0; i--) {
          if(i === index) return this.tail
          this.tail = this.tail.prev
        }
      } else {
        for(let i = 0; i < this.length; i++) {
          if(i === index) return this.head
          this.head = this.head.next
        }
      }
    }

}

const list = new DoublyLinkedList()
list.push(12)
list.push(5)
list.push(8)
list.push(10)
console.log(list.get(0))
// console.log(list.head.next)
