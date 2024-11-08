class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }

}

class Queue {

    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    //add to the end
    enqueue(val){
        const node = new Node(val)
        if(!this.first){
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        return this.size++
    }

    //remove from the beginning
    dequeue() {
        if(!this.first) return null
        const q = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = q.next
        this.size--
        return q.val
    }
}

const q = new Queue()
q.enqueue(10)
q.enqueue(11)
q.enqueue(12)
q.dequeue()
console.log(q)