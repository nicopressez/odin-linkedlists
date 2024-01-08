class LinkedList{
    constructor(head = null){
      this.head = head;
    }
    append(value){
      const newNode = new Node(value);
      let lastNode = this.head;
      if (lastNode) {
        while(lastNode.next){
          lastNode = lastNode.next;
        }
      }
      lastNode.next = newNode;
      newNode.next = null;    
    }
  
    preprend(value){
      const newNode = new Node(value);
      let firstNode = this.head;
      this.head = newNode;
      newNode.next = firstNode;
    }
  
    size(){
      let listSize = 0;
      let node = this.head;
      while(node){
        listSize++
        node = node.next;
      }
      return listSize;
    }
    heads(){
       return this.head
    }
  
    tail(){
      let lastNode = this.head;
      if (lastNode) {
        while(lastNode.next){
          lastNode = lastNode.next;
        }
        return lastNode;
    }}
  
    at(index){
      let node = this.head.next;
      if (index == 0) return this.head.value
  
      for (let currentIndex = 1; node != null; currentIndex++) {
        if(currentIndex == index) return node.value;
        else node = node.next;
        
      }
  
      return console.log("Couldn't find the index")
    }
  
    pop(){
      let previousNode;
      let lastNode = this.head;
      if (lastNode == null) console.log("Empty list");
      if (lastNode.next == null) this.head = null;
  
      if (lastNode) {
        while(lastNode.next){
          previousNode = lastNode
          lastNode = lastNode.next;
        }
      }
      previousNode.next = null;
      delete this.lastNode;
    }
  
    contains(value){
      if (typeof value != "number") return false;
      let node = this.head;
       while (node){
          if (node.value == value) return true;
          else if (node.next == null) return false;
          else {
            node = node.next
          }
       }
    }
  
    find(value){
      let node = this.head;
      let currentIndex = 0;
       while (node){
          if (node.value == value) return currentIndex;
          else if (node.next == null) return null;
          else {
            node = node.next
            currentIndex ++
          }
       }
    }
  
    toString(){
      let string ="";
      let node = this.head
       while(node){
         string = string + ` -> (${node.value})`;
         if (node.next == null) {
          string = string + ` -> null`
          return string;
         }
         node = node.next;
  
       }
    }
    insertAt(value,index){
      const newNode = new Node(value);
      let previousNode = this.head
      let node = this.head.next;
      if (index == 0) {
        newNode.next = previousNode
        this.head = newNode;
      }
      else{
        for (let currentIndex = 1; currentIndex != index; currentIndex++) {
          previousNode = node;
          node = node.next;}
      
      previousNode.next = newNode;
      newNode.next = node;
      }}
      removeAt(index){
        let previousNode = this.head;
        let currentNode = previousNode.next;
        let nextNode = currentNode.next;
  
        if (index == 0) {
          delete this.head
          this.head = currentNode;
        }
        else{
          for (let currentIndex = 1; currentIndex != index; currentIndex++) {
           previousNode = node;
           node = node.next;
           nextNode = node.next}
  
        previousNode.next = nextNode
        delete this.node
  
      }}
    }
  
  
  class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  let node1 = new Node(4)
  let node2 = new Node(7)
  let list = new LinkedList(node1)
  list.append(node2.value)
  list.preprend(15);
  console.log (list.toString())