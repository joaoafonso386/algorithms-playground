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


class CircularQueue {
    constructor(capacity) {
        this.size = 0
        this.start = 0
        this.end = 0
        this.capacity = capacity
        this.queue = new Array(capacity).fill(undefined)
    }


    enqueue(val){
        if(this.isFull()) { 
            console.log(`Queue is full. ${val} will not be inserted`) 
            return
        }

        this.queue[this.end] = val
        // How many times does 5 go into X (2 from ex), and what is left over? goes 0 times, so 2 % 5 = 2 
        this.end = (this.end + 1) % this.capacity
        this.size++
        return true
    }

    dequeue(){
        if(this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue") 
            return
        }
        const dequeuedValue = this.queue[this.start] 
        this.queue[this.start] = undefined
        this.start = (this.start + 1) % this.capacity
        this.size--
        return dequeuedValue
    } 

    isFull() {
        return this.size === this.capacity  
    }

    isEmpty() {
        return this.size === 0
    }
}


const cq = new CircularQueue(5)
cq.enqueue("A")
cq.enqueue("B")
cq.enqueue("C")
cq.enqueue("D")
cq.dequeue()
cq.enqueue("F")
cq.dequeue()
cq.enqueue("G")
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.enqueue("H")
cq.enqueue("A")
cq.enqueue("B")
cq.enqueue("C")
cq.enqueue("D")
cq.dequeue()
console.log(cq.queue)