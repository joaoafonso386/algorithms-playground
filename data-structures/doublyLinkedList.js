class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
        this.prev = null
     } 
}

class DounlyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

}

const list = new DounlyLinkedList()
console.log(list)
