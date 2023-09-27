const { nums, words } = require("./data/data.js");


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size(){
     let count = 0;
     let node = this.head;
     while(node){
      count ++;
      node = node.next;
     }
       return count
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next){
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for(let i = 1;i < counter; i++){
      node = node.next;
    }
    node.next = foundNode.next;
  }

  getFirst(){
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node
  }

  search(key){
    let node = this.head;
    while (node.data !== key){
      node = node.next;
    }
    return node;
  }

  getKth(k){
    let count = 1;
    let node = this.head;
    while(node && count !== k){
      count ++;
      node = node.next;
    }
    return node;
  }

  getKthToLast(k) {
   let getSize = this.size();
   let node = this.head;
   for (let i = 1; i < getSize - k; i++){
    node = node.next;
   }
   return node;
  }

  isEmpty(){
    return !this.head;
  }

  clear(){
    this.head = null;
  }

  toArray(){
    let arr = [];
    let item = this.head;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
     return arr;
  }

 
  containsDuplicates(){
    const arr = this.toArray();
    const unique = [...new Set(arr)];
    return arr.length !== unique.length;
  }

}



module.exports = {
  Node,
  LinkedList,
};
