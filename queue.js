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