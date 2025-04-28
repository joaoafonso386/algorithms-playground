/**
 *
 *  A binary heap where each node has at most two children, and it's typically used in implementing priority queues.
 *  A binary heap is commonly stored in an array or list by placing nodes
 * 
 *  The root is at index 0
 *  The children of node at index 0 are at indices \ and 2
 *  The children of node at index 1 are at indices 3 and 4
 *  The children of node at index 2 are at indices 5 and 6
 *  ... and so on
 * 
 *  1. Parent-to-Child Relationship:
 *  For any node at index 'i' (which is the parent), its LEFT child is at index `2 * i + 1`
 *  For any node at index 'i' (which is the parent), its RIGHT child is at index `2 * i + 2`
 * 
 *  2. Child-to-Parent Relationship:
 *  If a node (child) is located at index `j` (where j > 1), we want to find its parent's index 'i'.
 *  This is the inverse of the parent-to-child mapping.
 *
 *  Since `j` is a child of `i`, `j` must be either `2 * i` or `2 * i + 1`.
 *
 *  If `j` is the Left Child (`j = 2 * i + 1`): Dividing `j` by 2 gives `i = (j - 1) / 2`.
 *  If `j` is the Right Child (`j = 2 * i + 2`): Subtracting 1 then dividing by 2 gives `i = (j - 2) / 2`.
 * 
 *  Max Binary Heap: A binary heap where each parent node has a value greater than or equal to its children.
 *  Min Binary Heap: A binary heap where each parent node has a value less than or equal to its children.
 *  Priority Queue: In a Priority Queue, each element has a "priority" associated with it, and elements with higher priorities are served (or dequeued) before elements with lower priorities
 *
 *  Time Complexity
 *  Insertion and removal: O(log n), where n is the number of nodes.
 *  Search: O(n)
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
// maxBH.extractMax()
console.log(maxBH)


class Node {
    constructor(val, priority) {
      this.value = val;
      this.priority = priority;
    }
  }

class PriorityQueue {
    constructor() {
        this.values = [new Node(5, 1), new Node(10, 3), new Node(10, 2)]
    }

    enqueue(val, priority) {
        const node = new Node(val, priority)
        this.values.push(node)
        let i = this.values.length - 1
        let parentIndex = Math.floor((i - 1) / 2)
        while(i > 0 && this.values[i].priority < this.values[parentIndex].priority) {
            const temp = this.values[i]
            this.values[i] = this.values[parentIndex]
            this.values[parentIndex] = temp
            i = parentIndex
            parentIndex = Math.floor((parentIndex - 1)/2)
        }   

    }  

    dequeue() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();
        
        const min = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        
        let parentIdx = 0;
        
        while (true) {
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = 2 * parentIdx + 2;
            let swap = null;
            
            if (leftChildIdx < this.values.length) {
                if (this.values[leftChildIdx].priority < this.values[parentIdx].priority) {
                    swap = leftChildIdx;
                }
            }
            
            if (rightChildIdx < this.values.length) {
                if (
                    (swap === null && this.values[rightChildIdx].priority < this.values[parentIdx].priority) ||
                    (swap !== null && this.values[rightChildIdx].priority < this.values[leftChildIdx].priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            
            if (swap === null) break;
            
            [this.values[parentIdx], this.values[swap]] = [this.values[swap], this.values[parentIdx]];
            parentIdx = swap;
        }
        
        return min;
    }

}


const pq = new PriorityQueue()
pq.enqueue(50, 1)
pq.dequeue()
console.log(pq)
