class LinkedList { 
  
	constructor() { 
		this.head = null; 
		this.size = 0; 
  }

  add(element) { 
    const node = new Node(element); 
    let current; 
    if (this.head == null){
      this.head = node; 
    }
    else { 
      current = this.head; 
      while (current.next) { 
        current = current.next; 
      } 
      current.next = node; 
    } 
    this.size++; 
  }

  insertAt(element, index) 
  { 
    if (index > 0 && index > this.size){
      return false; 
    }
    else { 
      const node = new Node(element); 
      let curr, prev; 
      curr = this.head; 
      if (index == 0) { 
        node.next = head; 
        this.head = node; 
      } else { 
        curr = this.head; 
        let i = 0; 
        while (i < index) { 
          i++; 
          prev = curr; 
          curr = curr.next; 
        } 
        node.next = curr; 
        prev.next = node; 
      } 
      this.size++; 
    } 
  }

  removeFrom(index) { 
    if (index > 0 && index > this.size){
      return -1; 
    }
    else { 
      let curr, prev, it = 0; 
      curr = this.head; 
      prev = curr; 
      if (index === 0) { 
        this.head = curr.next; 
      } else { 
        while (it < index) { 
          it++; 
          prev = curr; 
          curr = curr.next; 
        }
        prev.next = curr.next; 
      } 
      this.size--; 
      return curr.element; 
    } 
  } 

  removeElement(element) { 
    let current = this.head; 
    let prev = null; 

    while (current != null) { 
      if (current.element === element) { 
        if (prev == null) { 
          this.head = current.next; 
        } else { 
          prev.next = current.next; 
        } 
        this.size--; 
        return current.element; 
      } 
      prev = current; 
      current = current.next; 
    } 
    return -1; 
  } 

  indexOf(element) { 
    let count = 0; 
    let current = this.head; 
    while (current != null) { 
      if (current.element === element){
        return count; 
      }
      count++; 
      current = current.next; 
    } 
    return -1; 
  }

  isEmpty() { 
    return this.size == 0; 
  }

  getSize(){ 
    console.log(this.size); 
  }

  printList() { 
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
      str += curr.element + " "; 
      curr = curr.next; 
    } 
    console.log(str); 
  }
} 
