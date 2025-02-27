const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    // this.lastNode = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // console.log(`Inserted ${value} at the end of the linked list.`);
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete(data) {
    let node = this.head;
    //lets start at the top of our node
    let counter = 0;
    //counter is here to keep track of our index of our data for deletion
    while (node.data !== data && node.next) {
      // this while compares the data at index to the data we are looking to delete and it takes in the next index if it is not null
      counter++; //keeps incrementing
      node = node.next; // updates the node to the next node in the sequence -- keep moving through the loop
    } //outside the loop we want to move our node for deletion and set it to a variable
    let foundNode = node; //from there intros a new instance of the found value for deletion
    node = this.head; //reset to beginning of the list because we found the one we want to delete
    //!re-initialize the link lists!
    // all linked lists are linked together -- only want to cut off this one.
    // if counter is the index of the found node -- that means counter is at 4 for example. want to stop right before it.
    for (
      let i = 0;
      i < counter - 1;
      i++ //the -1 means we stop right before the done we want to delete.
    ) // this loop is to loop through the entire list from before the foundNode value.
    {
      node = node.next; //init the node
      //adds to the linked list
      //this loop keeps going until right before the foundNode value all because of counter keeping track of the index of foundNode.
    }
    node.next = foundNode.next;
    //takes the current node and drops the foundNode and connects to the next value
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head == null) {
      return "Null list; no last element";
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  search(key) {
    if (this.head == null) {
      return "No elements in list; key not found";
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return "key not found in list.";
  }
  getKth(k) {
    let currentNode = this.head;
    for (let i = 1; i < k; i++) {
      if (currentNode) {
        currentNode = currentNode.next;
      }
    }
    if (currentNode) {
      return currentNode;
    } else {
      return null;
    }
  }
  // getKthToLast(k) {
  //   if (k <= 1) {
  //     return null; // Invalid value of k
  //   }
  
  //   let slow = this.head;
  //   let fast = this.head;
  //   console.log(slow, fast)
  //   // this.head.next = //one ahead of slow -- fast will hit last slow is one behind.
  
  //   // Move the fast pointer k positions ahead

  //   for (let i = 0; i < k; i++) {
  //     if (fast === null) {
  //      throw new Error("The linked list has fewer than k nodes")  ; // throw an error if fast pointer is null
  //     }
  //     fast = fast.next;
  //     // console.log(fast, fast.next);
  //   }
  
  //   // Move both pointers simultaneously until the fast pointer reaches the end
  //   while (fast !== null) { // the end.
  //     // slow = slow.next;
  //     //next after first
  //     // fast = fast.next;//next after second ?
  //   }
  
  //   return slow;
  // }
  getKthToLast(key) { // you used a key to get the last ok this makes sense
    let currentNode = this.head; // used the current placeholder for the current
    let size = this.size(); //this takes in the size of the list linked list ok

    while (size - 1 > key) { // we want the current placeholder amount FROM LAST
      // console.log(currentNode);
      currentNode = currentNode.next; // reassign the current placeholder to the next to iterate
      size--; //descending in the queue -- we queue fro the bottom up
    };
    return currentNode; // where and what
  };
  isEmpty(){
    return (this.head == null) 
  }

  clear() {
    this.head = null;
  }

  toArray() {
    if (this.head == null) {
      return [];
    } else {
      let thisNode = this.head;
      const getArray = [];
      while (thisNode) {
        getArray.push(thisNode.data);
        thisNode = thisNode.next;
      }
      return getArray;
    }
  }
  containsDuplicates() {
    const set = new Set();
    let currentNode = this.head;
  
    while (currentNode) {
      if (set.has(currentNode.data)) {
        return true; // Found a duplicate
      }
      set.add(currentNode.data);
      currentNode = currentNode.next;
    }
  
    return false; // No duplicates found
  }
}

module.exports = {
  Node,
  LinkedList,
};
