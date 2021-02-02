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
  /**
   * @description: 前序
   * @param {*} handler
   */
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
  /**
   * @description: 中序
   * @param {*} handler
   */
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
  /**
   * @description: 后序
   * @param {*} handler
   */
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
  /**
   * @description: 树中最大值
   * @param {*}
   * @return {*}
   * @author: camus
   */
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
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      if (current === null) return false;
    }
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
    } else {
      // 1.获取后继节点
      let successor = this.getSuccessor(current);
      // 2.判断是否是根节点
      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left;
    }
    return true;
  };

  /* 删除的节点有两个子节点，甚至子节点还有子节点，
则需要从下面的子节点中找到 一个节点替换当前的节点*/
  /* 前驱节点：比current小一点点的节点, 一定是current左子树的最大值，称为current节点的前驱
，后继节点 ：比current大一点点的节点, 一定是current右子树的最小值 称为current节点的后继.
*/
  // 后继
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    // 1.使用变量保存临时的节点
    let successorParent = delNode;
    let successor = delNode;
    let current = delNode.right; //从右子树开始找
    // 2.寻找节点
    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }
    // 3.如果删了图中15的情况，还需要如下
    if (successor != delNode.right) {
      successorParent.left = success.right;
      successor.right = delNode.right;
    }
    return successor;
  };
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
