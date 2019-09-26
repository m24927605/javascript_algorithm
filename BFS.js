class Tree{
  constructor(value){
    this.value=value;
    this.children = [];
  }
}

const BFS=(node, cb, depth = 0)=> {
  let queue = [];
  let nextQueue = [];
  queue.push(node);
  while (queue.length) {
    let current = queue.shift();
    cb(current, depth);
    current.children.forEach(child => {
      nextQueue.push(child);
    })
    if(!queue.length) {
      queue = nextQueue;
    nextQueue = [];
    depth++;
    }
  }
}

const breadthFirstSearch=(node, cb)=> {
  let queue = [];
  queue.push(node);
  while (queue.length) {
    let current = queue.shift();
    cb(current);
    if (current.children.length) {
      current.children.forEach(child => {
        queue.push(child);
      })
    }
  }
}

const tree = new Tree();

tree.value=1;
tree.children.push(new Tree(2));
tree.children.push(new Tree(3));
tree.children.push(new Tree(4));
tree.children[0].children.push(new Tree(5));
tree.children[1].children.push(new Tree(6));
tree.children[1].children.push(new Tree(7));
tree.children[2].children.push(new Tree(8));
tree.children[0].children[0].children.push(new Tree(9));
tree.children[1].children[0].children.push(new Tree(10));

breadthFirstSearch(tree, (node) => {
  console.log(node.value);
});

BFS(tree, (node, depth) => {
  console.log('value is ', node.value, ' at depth ', depth)
});