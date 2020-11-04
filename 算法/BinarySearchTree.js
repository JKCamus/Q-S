/**
 * @description: 二叉搜索树
 * @param {*}
 */
function BinarySearchTree() {
  /* 创建节点函数 */
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  this.root = null;
  /**
   * @description: 插入节点，根节点插入。非跟节点插入方法调用
   * @param {*}
   */
  BinarySearchTree.prototype.insert = function (key) {
    let newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };
  BinarySearchTree.prototype.preOderTraversal = function (handler) {
    this.preOderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.preOderTraversalNode = function (node, handler) {
    if (node !== null) {
      handler(node.key);
      this.preOderTraversalNode(node.left, handler);
      this.preOderTraversalNode(node.right, handler);
    }
  };
  BinarySearchTree.prototype.insertOderTraversal = function (handler) {
    this.insertOderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.insertOderTraversalNode = function (
    node,
    handler
  ) {
    if (node !== null) {
      this.insertOderTraversalNode(node.left, handler);
      handler(node.key);
      this.insertOderTraversalNode(node.right, handler);
    }
  };

  BinarySearchTree.prototype.postOderTraversal = function (handler) {
    this.postOderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.postOderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.postOderTraversalNode(node.left, handler);
      this.postOderTraversalNode(node.right, handler);
      handler(node.key);
    }
  };
  BinarySearchTree.prototype.min = function () {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.key;
  };
  BinarySearchTree.prototype.max = function () {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  };
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key);
  };
  BinarySearchTree.prototype.searchNode = function (node, key) {
    if (node === null) {
      return false;
    }
    if (node.key > key) {
      return this.searchNode(node.left, key);
    } else if (node.key < key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  };
  BinarySearchTree.prototype.remove = function (key) {
    let current = this.root;
    let parent = null;
    let isLeftChild = true;
    while (current.key !== key) {
      parent = key;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      if (current === null) return false;
    }
    return true;
  };
  /* 为叶子节点或者为跟 */
  if (current.left === null && current.right === null) {
    if (current === this.root) {
      this.root = null;
    } else if (isLeftChild) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  } else if (current.right === null) {
    //删除节点无右节点
    //删除节点由一个子节点
    if (current === this.root) {
      this.root = current.left;
    } else if (isLeftChild) {
      //删除的节点为左节点
      parent.left = current.left;
    } else {
      //删除的当前节点为右节点
      parent.right = current.left;
    }
  } else if (current.left === null) {
    if (current === this.root) {
      this.root = current.right;
    } else if (isLeftChild) {
      parent.left = current.right;
    } else {
      parent.left = current.right;
    }
  }
}

// 测试代码
var bst = new BinarySearchTree();

// 插入数据
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(2);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(30);
bst.insert(18);
bst.insert(25);
bst.insert(6);

let pre = "";
let insert = "";
let postOder = "";
bst.preOderTraversal((key) => (pre += key + " "));
bst.insertOderTraversal((key) => (insert += key + " "));
bst.postOderTraversal((key) => (postOder += key + " "));
let res = {
  前序遍历: pre,
  中序遍历: insert,
  后续遍历: postOder,
  最大值: bst.max(),
  最小值: bst.min(),
  是否存在某值: bst.search(10),
};

console.log("res", res);
