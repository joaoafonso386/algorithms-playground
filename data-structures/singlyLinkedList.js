class Node {
    constructor(val, next) {
        this.val = val 
        this.next = next 
     } 
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        const node = new Node(val)
        if(!this.head) {
            this.head = node
            //In the first item head and tail are the same
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
      if(!this.head) return undefined
      let curr = this.head;
      let newTail = curr
      while(curr.next) {
        newTail = curr
        curr = curr.next
      }
      this.tail = newTail
      this.tail.next = null
      this.length--
      if(this.length === 0) {
        this.head = null
        this.tail = null
      }
      return curr
    }

    shift() {
      if(!this.head) return undefined
      const curr = this.head
      this.head = curr.next
      this.length--
      if(this.length === 0) {
        this.tail = null
        this.head = null
      }
      return curr
    }

    unshift(val) {
      const node = new Node(val)
      if(!this.head) {
        this.head = node
        this.tail = this.head
      } else {
        node.next = this.head
        this.head = node
      }
      this.length++
      return this
    }

    get(index) {
      if(index < 0 || index >= this.length) return null
      let curr = this.head
      let counter = 0
      while(counter !== index) {
        curr = curr.next
        counter++
      }
      return curr
    }

    set(index, val) {
      const node = this.get(index)
      if(!node) return false
      node.val = val
      return true
    }

    insert(index, val) {
      if(index < 0 || index > this.length) return false
      if(index === this.length) return !!this.push(val)
      if(index === 0) return !!this.unshift(val)
      const prevNode = this.get(index - 1)
      const oldNexNode = prevNode.next
      const newNode = new Node(val)
      prevNode.next = newNode
      newNode.next = oldNexNode
      this.length++
      return true
    }

}

const list = new SinglyLinkedList()
list.push(5)
list.push(10)
list.push(23)
list.push(17)
list.push(125)
console.log(list.insert(5, 245))
console.log(list)
