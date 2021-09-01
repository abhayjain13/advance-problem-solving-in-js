class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  peek() {
    let current = this.root;
    while (current != null) {
      console.log(current.value, " -> ");
      current = current.next;
    }
    // return this.root;
  }

  makeLoop(pos) {
    let current = this.root;
    let joint;
    let count = 1;

    while (current.next != null) {
      if (count === pos) {
        joint = current;
      }
      current = current.next;
      count++;
    }
    current.next = joint;
  }

  detectLoop() {
    if (!this.root) return -1;
    let slowPtr = this.root;
    let fastPtr = this.root;
    while (fastPtr != null && fastPtr.next != null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if (fastPtr == slowPtr) {
        return 1;
      }
    }
    return 0;
  }

  removeLoop() {
    if (!this.root) return -1;
    let slowPtr = this.root;
    let fastPtr = this.root;
    do {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    } while (fastPtr != slowPtr);
    fastPtr = this.root;
    while (fastPtr != slowPtr) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }
    slowPtr.next = null;
  }
}

const list = new LinkedList();
list.add(2);
list.add(1);
list.add(4);
list.add(5);
list.add(6);
list.add(9);
list.add(7);
list.add(8);
list.add(11);
list.makeLoop(3);
console.log(list.detectLoop());
// console.log(list.peek());
list.removeLoop();
console.log(list.detectLoop());
