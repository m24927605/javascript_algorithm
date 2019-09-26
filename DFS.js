class Node{
  constructor(data){
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

class Tree{
  constructor(data){
    const node = new Node(data);
    this._root = node;
  }

  traverseDF(callback){
    (function recurse(currentNode) {
      callback(currentNode); 
      for (var i = 0, length = currentNode.children.length; i < length; i++) {
        recurse(currentNode.children[i]);
      }
    })(this._root);
  }
}

const tree = new Tree('1');

tree._root.children.push(new Node('2'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('5'));
tree._root.children[1].parent = tree;

tree._root.children[1].children.push(new Node('6'));
tree._root.children[1].children.push(new Node('8'));

tree._root.children[1].children[0].children.push(new Node('7'));

tree._root.children.push(new Node('9'));
tree._root.children[2].parent = tree;

tree._root.children[2].children.push(new Node('10'));

tree._root.children[0].children.push(new Node('3'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children[0].children.push(new Node('4'));
tree._root.children[0].children[0].children[0].parent = tree._root.children[0].children[0];

tree.traverseDF(function(node) {
  console.log(node.data)
});