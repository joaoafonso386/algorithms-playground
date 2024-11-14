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
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let root = this.root;
    while (true) {
      //edge case to ignore duplicates
      if (node.value === root.value) return undefined;
      if (node.value > root.value) {
        if (!root.right) {
          root.right = node;
          return this;
        }
        root = root.right;
      } else {
        if (!root.left) {
          root.left = node;
          return this;
        }
        root = root.left;
      }
    }
  }

  find(val) {
    let root = this.root;
    if (!root) return false;
    while (true) {
      if (root.value === val) return true;
      if (val > root.value) {
        if (!root.right) return false;
        root = root.right;
      } else {
        if (!root.left) return false;
        root = root.left;
      }
    }
  }

  bfs() {
    if (!this.root) return false;
    let root = this.root;
    const res = [];
    const q = [root];
    while (q.length > 0) {
      //shift first because the queue is not empty, if not values will be duplicated
      const v = q.shift();
      res.push(v.value);
      root = v;

      if (root.left) {
        q.push(root.left);
      }
      if (root.right) {
        q.push(root.right);
      }
    }

    return res;
  }

  dfsPreOrder() {
    if (!this.root) return false;
    const res = [];
    let curr = this.root;
    const traverse = (node) => {
      res.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(curr);

    return res;
  }

  dfsPostOrder() {
    if (!this.root) return false;
    const res = [];
    let curr = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      res.push(node.value);
    };

    traverse(curr);

    return res;
  }

  dfsInOrder() {
    if (!this.root) return false;
    const res = [];
    let curr = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      res.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(curr);

    return res;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(6);
tree.root.left.right = new Node(8);
tree.root.left.left = new Node(3);
tree.insert(20);
const res = tree.dfsInOrder();
console.log(res);
console.log(tree.root);
