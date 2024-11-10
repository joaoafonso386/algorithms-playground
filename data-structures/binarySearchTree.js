/**
 * 
 * In binary search trees each node has up to two child nodes, referred to as the left and right child.
 * All nodes in the left subtree of a node contain values that are less than the node's value
 * All nodes in the right subtree of a node contain values that are greater than the node's value.
 * 
 * Time complexity: O(log n)
 * 
 */

class Node {
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null    
    }

    insert(val) {
        const node = new Node(val)
        if(!this.root) { 
            this.root = node
            return this 
        }
        let root = this.root
        while(true) {
            //edge case to ignore duplicates
            if(node.value === root.value) return undefined
            if(node.value > root.value) {
                if(!root.right) {
                    root.right = node
                    return this
                }
                root = root.right
            } else {
                if(!root.left) {
                    root.left = node
                    return this
                }
                root = root.left
            }
        }

    }
}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(75)
tree.root.left = new Node(7)
tree.root.left.right = new Node(8)
tree.root.left.left = new Node(5)
tree.insert(6)
console.log(tree.root.left)