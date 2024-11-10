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
}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(75)
tree.root.left = new Node(7)