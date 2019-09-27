class Queue {
  constructor(){
    this.queue = [];
  }
  enqueue(value){
    this.queue.unshift(value);
  }
  dequeue(){
    return this.queue.pop();
  }
}

const q=new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.queue);
q.dequeue();
console.log(q.queue);