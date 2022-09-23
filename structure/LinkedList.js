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

}