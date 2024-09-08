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


}

const list = new SinglyLinkedList()
list.push(5)
list.push(10)
list.push(23)
console.log(list.pop())
console.log(list)