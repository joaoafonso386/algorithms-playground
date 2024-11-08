class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}


class Stack {

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }

    push(val) {
        const node = new Node(val)
        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            const first = this.first
            this.first = node
            node.next = first
        }
        return this.size++
    }

    pop() {
        if(!this.first) return null
        const first = this.first
        if(this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = first.next
            first.next = null
        }
        this.size--
        return first.value
    }
}

const stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(5)
stack.push(10)
stack.pop()
console.log(stack)