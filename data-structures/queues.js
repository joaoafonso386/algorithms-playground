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

    }
}

const q = new Queue()
q.enqueue(10)
q.enqueue(11)
q.enqueue(12)
console.log(q)