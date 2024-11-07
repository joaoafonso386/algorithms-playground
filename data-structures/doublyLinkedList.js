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
        return last
      }
      this.tail = last.prev
      this.tail.next = null
      last.prev = null
      this.length--
      return last
    }

}

const list = new DoublyLinkedList()
list.push(12)
list.push(5)
list.push(8)
list.push(10)
list.pop()
console.log(list)
