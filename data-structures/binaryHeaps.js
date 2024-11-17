/**
 *
 *  A binary heap where each node has at most two children, and it's typically used in implementing priority queues.
 *  Max Binary Heap: A binary heap where each parent node has a value greater than or equal to its children.
 *  Min Binary Heap: A binary heap where each parent node has a value less than or equal to its children.
 *
 *  Time Complexity
 *  Insertion and removal: O(log n), where n is the number of nodes.
 *  Accessing the root (min or max): O(1).
 *
 */


class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12]
    }

    insert(val) {
        this.values.push(val)
        let i = this.values.length - 1
        let parentIndex = Math.floor((i - 1) / 2)
        while(i > 0 && this.values[i] > this.values[parentIndex]) {
            const temp = this.values[i]
            this.values[i] = this.values[parentIndex]
            this.values[parentIndex] = temp
            i = parentIndex
            parentIndex = Math.floor((parentIndex - 1)/2)
        }   

    }  

}



const maxBH = new MaxBinaryHeap()
maxBH.insert(55)
console.log(maxBH)