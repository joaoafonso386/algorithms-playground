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

    extractMax() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();
        
        const max = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        
        let parentIdx = 0;
        
        while (true) {
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = 2 * parentIdx + 2;
            let swap = null;
            
            if (leftChildIdx < this.values.length) {
                if (this.values[leftChildIdx] > this.values[parentIdx]) {
                    swap = leftChildIdx;
                }
            }
            
            if (rightChildIdx < this.values.length) {
                if (
                    (swap === null && this.values[rightChildIdx] > this.values[parentIdx]) ||
                    (swap !== null && this.values[rightChildIdx] > this.values[leftChildIdx])
                ) {
                    swap = rightChildIdx;
                }
            }
            
            if (swap === null) break;
            
            [this.values[parentIdx], this.values[swap]] = [this.values[swap], this.values[parentIdx]];
            parentIdx = swap;
        }
        
        return max;
    }

}



const maxBH = new MaxBinaryHeap()
maxBH.insert(55)
maxBH.extractMax()
console.log(maxBH)