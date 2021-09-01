class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class NthNodeFind {
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

  findFromN(pos) {
    if (!this.root || pos < 0) return -1;
    let slowPtr = null;
    let fastPtr = this.root;
    let count = 1;
    while (fastPtr !== null) {
      if (pos <= count) {
        if (!slowPtr) {
          slowPtr = this.root;
        } else {
          slowPtr = slowPtr.next;
        }
      }
      fastPtr = fastPtr.next;
      count++;
    }
    if (!slowPtr) {
      if (count === pos) {
        return (slowPtr = this.root.next);
      } else {
        return "Out of bound";
      }
    }
    return slowPtr.value;
  }
}

const list = new NthNodeFind();
list.add(2);
list.add(1);
list.add(4);
list.add(5);
list.add(6);
list.add(9);
list.add(7);
list.add(8);
list.add(11);
console.log(JSON.stringify(list.findFromN(2)));
