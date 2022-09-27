const ListNode = require("./ListNode");

class LinkedList {
    constructor() {
        this.head = null;
    }
    addToHead(data) {
        let newHead = new Node(data);
        if (this.head) {
            newHead.setNextNode(this.head)
            this.head = newHead
        }
    }
    addToTail(data){
        let newTail = new Node(data);
        let currentNode = this.head;
        while(currentNode){
            currentNode = currentNode.getNextNode()
        }
        currentNode.setNextNode(newTail)
    }
    removeHeadNode(){
        let newHead = this.head.getNextNode()
        this.head = newHead
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode!== null) {
          output += currentNode.data + ' ';
          currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
      }

}

module.exports = LinkedList;