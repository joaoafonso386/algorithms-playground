/**
 * 
 * For learning reference: https://www.geeksforgeeks.org/introduction-to-segment-trees-2/
 * 
 */

class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = Array(2 * this.n).fill(0);
        this.build(arr);
    }

    build(arr) {
        // Initialize leaves with the array elements
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }
        // Build the tree by calculating parents
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(index, value) {
        // Update the leaf node
        index += this.n;
        this.tree[index] = value;
        // Update the internal nodes
        while (index > 1) {
            index = Math.floor(index / 2);
            this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
        }
    }

    query(left, right) {
        let sum = 0;
        left += this.n;
        right += this.n + 1; // Make the range inclusive
        while (left < right) {
            if (left % 2 === 1) {
                sum += this.tree[left];
                left++;
            }
            if (right % 2 === 1) {
                right--;
                sum += this.tree[right];
            }
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
        }
        return sum;
    }
}

const st = new SegmentTree([1,2,5,40,23])
console.log(st)